import React, { useState } from 'react';
import '../css/NetIncomeCalculator.css'; // <-- Importa el archivo CSS

interface CalculatorState {
    grossIncome: number;
    taxes: number;
    deductions: number;
    netIncome: number;
}

const NetIncomeCalculator: React.FC = () => {
    const [state, setState] = useState<CalculatorState>({
        grossIncome: 0,
        taxes: 0,
        deductions: 0,
        netIncome: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: parseFloat(value) || 0, // Use parseFloat and default to 0 for invalid numbers
        }));
    };

    const calculateNetIncome = () => {
        const { grossIncome, taxes, deductions } = state;
        const calculatedNetIncome = grossIncome - taxes - deductions;
        setState((prevState) => ({
            ...prevState,
            netIncome: calculatedNetIncome,
        }));
    };

    return (
        // Añade una clase al div principal
        <div className="net-income-calculator-container">
            <h2>Calculadora de Ingreso Neto</h2>
            <div>
                <label htmlFor="grossIncome">Ingreso Bruto:</label>
                <input
                    type="number"
                    id="grossIncome"
                    name="grossIncome"
                    value={state.grossIncome}
                    onChange={handleInputChange}
                    min="0"
                />
            </div>
            <div>
                <label htmlFor="taxes">Impuestos:</label>
                <input
                    type="number"
                    id="taxes"
                    name="taxes"
                    value={state.taxes}
                    onChange={handleInputChange}
                    min="0"
                />
            </div>
            <div>
                <label htmlFor="deductions">Otras Deducciones:</label>
                <input
                    type="number"
                    id="deductions"
                    name="deductions"
                    value={state.deductions}
                    onChange={handleInputChange}
                    min="0"
                />
            </div>
            {/* Añade una clase al botón */}
            <button onClick={calculateNetIncome} className="calculate-button">Calcular Ingreso Neto</button>
            {state.netIncome !== 0 && (
                // Añade una clase al div de resultado
                <div className="result-display">
                    <h3>Ingreso Neto: {state.netIncome.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default NetIncomeCalculator;