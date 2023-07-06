import { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const handleAdd = () => {
        fetch(`/api/calculator/add?a=${num1}&b=${num2}`)
            .then((response) => response.json())
            .then((data) => setResult(data.result))
            .catch((error) => console.error(error));
    };

    const handleSubtract = () => {
        fetch(`/api/calculator/subtract?a=${num1}&b=${num2}`)
            .then((response) => response.json())
            .then((data) => setResult(data.result))
            .catch((error) => console.error(error));
    };

    const handleMultiply = () => {
        fetch(`/api/calculator/multiply?a=${num1}&b=${num2}`)
            .then((response) => response.json())
            .then((data) => setResult(data.result))
            .catch((error) => console.error(error));
    };

    const handleDivide = () => {
        fetch(`/api/calculator/divide?a=${num1}&b=${num2}`)
            .then((response) => response.json())
            .then((data) => setResult(data.result))
            .catch((error) => console.error(error));

    };

    return (
        <div className="bg-white p-6 rounded shadow-md text-black">
            <h2 className="text-xl font-bold mb-4">Simple Calculator</h2>
            <div className="flex justify-center mb-4">
                <input type="number" id="num1" className="w-20 border border-gray-300 p-2 mr-2 focus:outline-none flex-grow" placeholder="Number 1" onChange={(e) => setNum1(Number(e.target.value))} />
                <input type="number" id="num2" className="w-20 border border-gray-300 p-2 mr-2 focus:outline-none flex-grow" placeholder="Number 2" onChange={(e) => setNum2(Number(e.target.value))} />
            </div>
            <div className="flex mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAdd}>Add</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={handleSubtract}>Subtract</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleMultiply}>Multiply</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={handleDivide}>Divide</button>
            </div>
            <div className="flex justify-center align-middle">
                <label className="mr-2">Result:</label>
                <input type="number" id="result" className="w-20 border border-gray-300 p-2 focus:outline-none flex-grow" value={result} readOnly />
            </div>
        </div>
    );
}

export default Calculator;