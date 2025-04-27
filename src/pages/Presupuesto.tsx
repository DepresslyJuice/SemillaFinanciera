import { useEffect, useState } from 'react';
import '../css/Presupuesto.css'

interface PresupuestoItem {
    categoria: string;
    montoPlaneado: string;
    montoReal: string;
}

function DisenaTuPresupuesto() {
    const [presupuesto, setPresupuesto] = useState<PresupuestoItem[]>([]);
    const [nuevaCategoria, setNuevaCategoria] = useState('');

    // Cargar desde localStorage
    useEffect(() => {
        const data = localStorage.getItem('presupuesto');
        if (data) {
            setPresupuesto(JSON.parse(data));
        } else {
            setPresupuesto([
                { categoria: 'Ingresos', montoPlaneado: '', montoReal: '' },
                { categoria: 'Gastos fijos', montoPlaneado: '', montoReal: '' },
                { categoria: 'Gastos variables', montoPlaneado: '', montoReal: '' },
                { categoria: 'Ahorro', montoPlaneado: '', montoReal: '' },
            ]);
        }
    }, []);

    // Guardar en localStorage cada vez que se actualiza
    useEffect(() => {
        localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
    }, [presupuesto]);

    const handleInputChange = (index: number, field: string, value: string) => {
        const updated = [...presupuesto];
        updated[index][field as keyof PresupuestoItem] = value;
        setPresupuesto(updated);
    };

    const handleAgregarCategoria = () => {
        if (nuevaCategoria.trim() !== '') {
            setPresupuesto([...presupuesto, { categoria: nuevaCategoria.trim(), montoPlaneado: '', montoReal: '' }]);
            setNuevaCategoria('');
        }
    };

    const handleEliminarCategoria = (index: number) => {
        const updated = presupuesto.filter((_, i) => i !== index);
        setPresupuesto(updated);
    };

    const calcularTotales = () => {
        let totalPlaneado = 0;
        let totalReal = 0;
        presupuesto.forEach(item => {
            totalPlaneado += Number(item.montoPlaneado) || 0;
            totalReal += Number(item.montoReal) || 0;
        });
        return { totalPlaneado, totalReal };
    };

    const { totalPlaneado, totalReal } = calcularTotales();
    const diferencia = totalPlaneado - totalReal;
    const mensajeResumen =
        diferencia === 0
            ? '¡Perfecto! Tu presupuesto real coincide con el planeado.'
            : diferencia > 0
                ? `¡Bien! Gastaste $${diferencia} mas de lo planeado.`
                : `Atención: Hay una diferencia de $${Math.abs(diferencia)}.`;

    return (
        <div className="Presupuesto-main">
        <section className="presupuesto-contain er p-6 max-w-4xl mx-auto">
            {/* Apartado informativo */}
            <div className="bg-yellow-100 p-6 rounded-2xl shadow-md mb-8">
                <h2 className="text-3xl font-bold mb-4">¿Qué es un presupuesto?</h2>
                <p className="text-lg mb-2">
                    Un presupuesto es una herramienta que te permite planificar y controlar tus ingresos y gastos. Te ayuda a:
                </p>
                <ul className="list-disc ml-6 mb-4 text-lg">
                    <li>Identificar tus prioridades financieras.</li>
                    <li>Ahorrar para metas específicas.</li>
                    <li>Evitar deudas innecesarias.</li>
                    <li>Tomar decisiones de gasto más conscientes.</li>
                </ul>
                <p className="text-lg">
                    ¡Diseñar tu presupuesto es un primer paso para construir tu libertad financiera!
                </p>
            </div>

            {/* Área de edición del presupuesto */}
            <h2 className="text-3xl font-bold mb-6">Diseña tu Presupuesto</h2>

            <div className="flex mb-6">
                <input
                    type="text"
                    value={nuevaCategoria}
                    onChange={(e) => setNuevaCategoria(e.target.value)}
                    placeholder="Nueva categoría"
                    className="border p-2 rounded-l w-full"
                />
                <button
                    onClick={handleAgregarCategoria}
                    className="bg-green-500 text-white px-4 rounded-r hover:bg-green-600 transition"
                >
                    Agregar
                </button>
            </div>

            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white rounded-2xl shadow-md">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-4 text-left">Categoría</th>
                        <th className="p-4 text-left">Monto planeado</th>
                        <th className="p-4 text-left">Monto real</th>
                        <th className="p-4 text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {presupuesto.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-4">{item.categoria}</td>
                            <td className="p-4">
                                <input
                                    type="number"
                                    value={item.montoPlaneado}
                                    onChange={(e) => handleInputChange(index, 'montoPlaneado', e.target.value)}
                                    className="border rounded p-2 w-full"
                                />
                            </td>
                            <td className="p-4">
                                <input
                                    type="number"
                                    value={item.montoReal}
                                    onChange={(e) => handleInputChange(index, 'montoReal', e.target.value)}
                                    className="border rounded p-2 w-full"
                                />
                            </td>
                            <td className="p-4 text-center">
                                <button
                                    onClick={() => handleEliminarCategoria(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Resumen de presupuesto */}
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">Resumen</h3>
                <p className="text-lg mb-2">
                    <strong>Total Planeado:</strong> ${totalPlaneado.toFixed(2)}
                </p>
                <p className="text-lg mb-2">
                    <strong>Total Real:</strong> ${totalReal.toFixed(2)}
                </p>
                <p
                    className={`mt-4 text-lg font-semibold ${
                        diferencia >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    {mensajeResumen}
                </p>
            </div>
        </section>
        </div>
    );
}

export default DisenaTuPresupuesto;
