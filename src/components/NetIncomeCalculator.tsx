import React, { useState, useEffect } from 'react';
import "../css/NetIncomeCalculator.css";

interface CalculatorState {
    grossIncome: number;
    taxRate: number;
    taxes: number;
    deductions: number;
    netIncome: number;
    customTaxRate: boolean;
}

interface TaxRateOption {
    label: string;
    value: number | string;
}

const NetIncomeCalculator: React.FC = () => {
    const [state, setState] = useState<CalculatorState>({
        grossIncome: 5000,
        taxRate: 20,
        taxes: 1000,
        deductions: 500,
        netIncome: 3500,
        customTaxRate: false,
    });

    // Función para dar formato a números como moneda
    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        }).format(value);
    };

    // Tasas de impuestos predefinidas
    const taxRates: TaxRateOption[] = [
        { label: "19% (Tramo 1)", value: 19 },
        { label: "24% (Tramo 2)", value: 24 },
        { label: "30% (Tramo 3)", value: 30 },
        { label: "37% (Tramo 4)", value: 37 },
        { label: "45% (Tramo 5)", value: 45 },
        { label: "Personalizado", value: "custom" }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const parsedValue = parseFloat(value) || 0;

        setState((prevState) => {
            const newState = { ...prevState };

            if (name === 'grossIncome') newState.grossIncome = parsedValue;
            else if (name === 'taxRate') newState.taxRate = parsedValue;
            else if (name === 'taxes') newState.taxes = parsedValue;
            else if (name === 'deductions') newState.deductions = parsedValue;

            if (name === 'grossIncome' || name === 'taxRate') {
                newState.taxes = (newState.grossIncome * newState.taxRate) / 100;
            }

            newState.netIncome = newState.grossIncome - newState.taxes - newState.deductions;

            return newState;
        });
    };


    const handleTaxRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        if (value === "custom") {
            setState(prev => ({
                ...prev,
                customTaxRate: true
            }));
        } else {
            const taxRate = parseFloat(value);
            const taxes = (state.grossIncome * taxRate) / 100;

            setState(prev => ({
                ...prev,
                taxRate,
                taxes,
                netIncome: state.grossIncome - taxes - state.deductions,
                customTaxRate: false
            }));
        }
    };

    // Datos para la visualización
    const netIncomePercentage = Math.round((state.netIncome / state.grossIncome) * 100) || 0;
    const taxesPercentage = Math.round((state.taxes / state.grossIncome) * 100) || 0;
    const deductionsPercentage = Math.round((state.deductions / state.grossIncome) * 100) || 0;

    // Efecto para recalcular cuando cambian las deducciones
    useEffect(() => {
        setState(prev => ({
            ...prev,
            netIncome: prev.grossIncome - prev.taxes - prev.deductions
        }));
    }, [state.deductions]);

    return (
        // Añade una clase al div principal
        <div className="net-income-calculator-enhanced">
            {/* Añade una clase al encabezado */}
            <div className="calculator-header">
                <div className="header-icon">📊</div> {/* Añade una clase al icono si quieres */}
                <h2>Calculadora de Ingreso Neto</h2>
            </div>

            <div className="calculator-content-grid">
                {/* Panel de entrada */}
                <div className="input-panel"> {/* Añade una clase para el panel */}
                    {/* space-y-4 */}
                    <div className="input-group"> {/* space-y-2 */}
                        <div className="label-with-icon"> {/* flex items-center */}
                            <span className="icon-green">💰</span> {/* Añade clases para los iconos */}
                            <label htmlFor="grossIncome">
                                Ingreso Bruto:
                            </label>
                        </div>
                        <div className="input-wrapper"> {/* relative */}
                            <input
                                type="number"
                                id="grossIncome"
                                name="grossIncome"
                                value={state.grossIncome}
                                onChange={handleInputChange}
                                min="0"
                                className="styled-input" // Añade una clase base para inputs
                            />
                            <span className="currency-symbol">€</span> {/* Clase para el símbolo */}
                        </div>
                    </div>

                    <div className="input-group"> {/* space-y-2 */}
                        <div className="label-with-icon"> {/* flex items-center */}
                            <span className="icon-red">%</span> {/* Añade clases para los iconos */}
                            <label htmlFor="taxRate">
                                Tasa de Impuestos:
                            </label>
                        </div>
                        {/* Aplica styled-input a select también */}
                        <select
                            id="taxRate"
                            value={state.customTaxRate ? "custom" : state.taxRate}
                            onChange={handleTaxRateChange}
                            className="styled-input"
                        >
                            {taxRates.map((rate) => (
                                <option key={rate.value.toString()} value={rate.value}>
                                    {rate.label}
                                </option>
                            ))}
                        </select>

                        {state.customTaxRate && (
                            <div className="mt-2 relative input-wrapper"> {/* mt-2 relative, añadir input-wrapper */}
                                {/* Aplica styled-input al input de tasa personalizada */}
                                <input
                                    type="number"
                                    name="taxRate"
                                    value={state.taxRate}
                                    onChange={handleInputChange}
                                    min="0"
                                    max="100"
                                    className="styled-input"
                                />
                                <span className="currency-symbol">%</span> {/* Clase para el símbolo */}
                            </div>
                        )}
                    </div>

                    <div className="input-group"> {/* space-y-2 */}
                        <div className="label-with-icon"> {/* flex items-center */}
                            <span className="icon-red">📝</span> {/* Añade clases para los iconos */}
                            <label htmlFor="taxes">
                                Impuestos (monto manual):
                            </label>
                        </div>
                        <div className="input-wrapper"> {/* relative */}
                            {/* Aplica styled-input al input de impuestos manuales */}
                            <input
                                type="number"
                                id="taxes"
                                name="taxes"
                                value={state.taxes}
                                onChange={handleInputChange}
                                min="0"
                                className="styled-input"
                                disabled={!state.customTaxRate} // Deshabilita si no es tasa personalizada
                            />
                            <span className="currency-symbol">€</span> {/* Clase para el símbolo */}
                        </div>
                        {!state.customTaxRate && state.taxRate > 0 && (
                            <p className="tax-calculated-note">
                                Monto calculado automáticamente: {formatCurrency(state.taxes)}
                            </p>
                        )}
                    </div>


                    <div className="input-group"> {/* space-y-2 */}
                        <div className="label-with-icon"> {/* flex items-center */}
                            <span className="icon-yellow">📋</span> {/* Añade clases para los iconos */}
                            <label htmlFor="deductions">
                                Otras Deducciones:
                            </label>
                        </div>
                        <div className="input-wrapper"> {/* relative */}
                            {/* Aplica styled-input al input de deducciones */}
                            <input
                                type="number"
                                id="deductions"
                                name="deductions"
                                value={state.deductions}
                                onChange={handleInputChange}
                                min="0"
                                className="styled-input"
                            />
                            <span className="currency-symbol">€</span> {/* Clase para el símbolo */}
                        </div>
                    </div>
                </div>

                {/* Resultados y visualización */}
                <div className="results-panel"> {/* Añade una clase para el panel */}
                    {/* space-y-4 */}
                    <div className="summary-block"> {/* Clase para el bloque de resumen */}
                        <h3>Resumen</h3>
                        {/* space-y-2 */}
                        <div className="summary-lines"> {/* Clase para las líneas del resumen */}
                            <div className="summary-line"> {/* flex justify-between */}
                                <span>Ingreso Bruto:</span>
                                <span className="font-semibold">{formatCurrency(state.grossIncome)}</span>
                            </div>
                            {/* Usa taxAmount para mostrar el monto de impuestos, sea calculado o manual */}
                            <div className="summary-line text-red-600"> {/* flex justify-between text-red-600 */}
                                <span>Impuestos ({state.customTaxRate ? 'Manual' : `${state.taxRate}%`}):</span> {/* Ajusta el texto según si es manual o tasa */}
                                <span className="font-semibold">- {formatCurrency(state.taxes)}</span>
                            </div>
                            <div className="summary-line text-yellow-600"> {/* flex justify-between text-yellow-600 */}
                                <span>Deducciones:</span>
                                <span className="font-semibold">- {formatCurrency(state.deductions)}</span>
                            </div>
                            {/* border-t border-gray-300 pt-2 mt-2 flex justify-between text-green-600 */}
                            <div className="total-line"> {/* Clase para la línea total */}
                                <span className="font-bold">Ingreso Neto:</span>
                                <span className="font-bold">{formatCurrency(state.netIncome)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="distribution-block"> {/* Clase para el bloque de distribución */}
                        <h3>Distribución</h3>

                        {/* Gráfico de barras simple */}
                        <div className="progress-bars-container"> {/* space-y-3 mt-4 */}
                            {/* space-y-3 */}
                            <div className="progress-bar-item">
                                {/* flex justify-between text-sm mb-1 */}
                                <div className="progress-bar-labels">
                                    <span className="text-green-600">Ingreso Neto</span>
                                    <span>{netIncomePercentage}%</span>
                                </div>
                                {/* w-full bg-gray-200 rounded-full h-4 */}
                                <div className="progress-bar-track">
                                    {/* bg-green-500 h-4 rounded-full */}
                                    <div
                                        className="progress-bar-fill bg-green-500"
                                        style={{ width: `${netIncomePercentage}%` }} // <-- Este estilo queda inline
                                    ></div>
                                </div>
                            </div>

                            <div className="progress-bar-item">
                                {/* flex justify-between text-sm mb-1 */}
                                <div className="progress-bar-labels">
                                    <span className="text-red-600">Impuestos</span>
                                    <span>{taxesPercentage}%</span>
                                </div>
                                {/* w-full bg-gray-200 rounded-full h-4 */}
                                <div className="progress-bar-track">
                                    {/* bg-red-500 h-4 rounded-full */}
                                    <div
                                        className="progress-bar-fill bg-red-500"
                                        style={{ width: `${taxesPercentage}%` }} // <-- Este estilo queda inline
                                    ></div>
                                </div>
                            </div>

                            <div className="progress-bar-item">
                                {/* flex justify-between text-sm mb-1 */}
                                <div className="progress-bar-labels">
                                    <span className="text-yellow-600">Deducciones</span>
                                    <span>{deductionsPercentage}%</span>
                                </div>
                                {/* w-full bg-gray-200 rounded-full h-4 */}
                                <div className="progress-bar-track">
                                    {/* bg-yellow-500 h-4 rounded-full */}
                                    <div
                                        className="progress-bar-fill bg-yellow-500"
                                        style={{ width: `${deductionsPercentage}%` }} // <-- Este estilo queda inline
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* text-xs text-gray-500 mt-4 text-center */}
                        <div className="total-gross-text">
                            Total: {formatCurrency(state.grossIncome)} (100%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetIncomeCalculator;