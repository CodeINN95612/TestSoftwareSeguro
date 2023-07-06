import { EncriptedReponse } from '@/models/EncriptedResponse';
import aws from 'aws-sdk'

export const encrypt = async (data: string) => {
    aws.config.update({
        credentials: {
            accessKeyId: process.env.AWS_ID ?? "",
            secretAccessKey: process.env.AWS_KEY ?? "",
        },
        region: "us-east-1",
    })

    const kms = new aws.KMS({
        credentials: {
            accessKeyId: process.env.AWS_ID ?? "",
            secretAccessKey: process.env.AWS_KEY ?? ""
        },
        region: 'us-east-1',
    });

    return new Promise((resolve, reject) => {

        const params = {
            KeyId: process.env.AWS_KMS_ID ?? "",
            Plaintext: data
        };

        kms.encrypt(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.CiphertextBlob);
            }
        });
    });
}

export const decrypt = async <T>(encriptedData: EncriptedReponse): Promise<T> => {

    const buffer = Buffer.from(encriptedData.data);

    aws.config.update({
        credentials: {
            accessKeyId: process.env.AWS_ID ?? "",
            secretAccessKey: process.env.AWS_KEY ?? "",
        },
        region: "us-east-1",
    })

    const kms = new aws.KMS({
        credentials: {
            accessKeyId: process.env.AWS_ID ?? "",
            secretAccessKey: process.env.AWS_KEY ?? "",
        },
        region: 'us-east-1',
    });

    return new Promise((resolve, reject) => {
        const params = {
            KeyId: "c2359e2c-a3ba-44f5-8e33-d8f9ed5c1ecb",
            CiphertextBlob: buffer
        };
        kms.decrypt(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const obj: T = JSON.parse(data.Plaintext?.toString() ?? "");
                resolve(obj);
            }
        });
    });
}