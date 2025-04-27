    import React, { useState, useEffect } from 'react';
    import '../css/Calculadora.css'


    interface ResultadoCalculo {
        ahorroMensual: number | null;
        totalAcumulado: number | null;
        interesGanado: number | null;
    }

    function CalculadoraAhorro() {
        // Estados para los inputs
        const [meta, setMeta] = useState<number | ''>('');
        const [plazoMeses, setPlazoMeses] = useState<number | ''>('');
        const [ahorroInicial, setAhorroInicial] = useState<number | ''>(0);
        const [tasaInteres, setTasaInteres] = useState<number | ''>(0);
        //Metodos de ahorro
        const [metodoAhorro, setMetodoAhorro] = useState<string>('fijo');
        const handleMetodoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setMetodoAhorro(event.target.value);
        };
        // Estados para los resultados y errores
        const [resultado, setResultado] = useState<ResultadoCalculo>({
            ahorroMensual: null,
            totalAcumulado: null,
            interesGanado: null
        });
        const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
        const [hayError, setHayError] = useState<boolean>(false);

        // Validar formulario antes de calcular
        const formularioValido = (): boolean => {
            return (
                typeof meta === 'number' &&
                typeof plazoMeses === 'number' &&
                meta > 0 &&
                plazoMeses > 0
            );
        };

        // Manejadores de cambio para los inputs
        const handleMetaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setMeta(event.target.value === '' ? '' : parseFloat(event.target.value));
        };

        const handlePlazoMesesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPlazoMeses(event.target.value === '' ? '' : parseInt(event.target.value, 10));
        };

        const handleAhorroInicialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setAhorroInicial(event.target.value === '' ? 0 : parseFloat(event.target.value));
        };

        const handleTasaInteresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTasaInteres(event.target.value === '' ? 0 : parseFloat(event.target.value));
        };

        // Calcular el ahorro mensual y otros valores
        const calcularAhorro = () => {
            if (!formularioValido()) {
                setHayError(true);
                setMostrarResultado(false);
                return;
            }

            setHayError(false);

            const metaNum = typeof meta === 'number' ? meta : 0;
            const plazoNum = typeof plazoMeses === 'number' ? plazoMeses : 0;
            const ahorroInicialNum = typeof ahorroInicial === 'number' ? ahorroInicial : 0;
            const tasaInteresNum = typeof tasaInteres === 'number' ? tasaInteres : 0;
            const tasaMensual = tasaInteresNum / 100 / 12;

            let ahorroMensualCalculado = 0;

            if (metodoAhorro === 'fijo') {
                if (tasaInteresNum === 0) {
                    const cantidadNecesaria = metaNum - ahorroInicialNum;
                    ahorroMensualCalculado = cantidadNecesaria / plazoNum;
                } else {
                    const factor1 = Math.pow(1 + tasaMensual, plazoNum);
                    ahorroMensualCalculado = (metaNum - ahorroInicialNum * factor1) / ((factor1 - 1) / tasaMensual);
                }
            } else if (metodoAhorro === 'creciente') {
                // Ahorro creciente: suma aritmética (an + a1)*n/2 = meta
                // Aproximación sencilla
                const cantidadNecesaria = metaNum - ahorroInicialNum;
                const primerMes = cantidadNecesaria / (plazoNum * (plazoNum + 1) / 2);
                ahorroMensualCalculado = primerMes; // El primer mes; luego irá aumentando
            } else if (metodoAhorro === 'decreciente') {
                const cantidadNecesaria = metaNum - ahorroInicialNum;
                const primerMes = (2 * cantidadNecesaria) / (plazoNum * (plazoNum + 1));
                ahorroMensualCalculado = primerMes; // El primer mes, más alto, luego va bajando
            } else if (metodoAhorro === 'porcentaje') {
                // En este caso, la calculadora necesita un porcentaje fijo (que podríamos agregar como otro input)
                // De momento, podríamos decir que hay que ahorrar 10% del ingreso mensual típico para alcanzar la meta
                ahorroMensualCalculado = (metaNum - ahorroInicialNum) / plazoNum;
            }

            setResultado({
                ahorroMensual: ahorroMensualCalculado,
                totalAcumulado: metaNum,
                interesGanado: tasaInteresNum === 0 ? 0 : metaNum - (ahorroMensualCalculado * plazoNum + ahorroInicialNum)
            });

            setMostrarResultado(true);
        };


        // Reiniciar todos los campos
        const reiniciarCalculadora = () => {
            setMeta('');
            setPlazoMeses('');
            setAhorroInicial(0);
            setTasaInteres(0);
            setMostrarResultado(false);
            setHayError(false);
            setResultado({
                ahorroMensual: null,
                totalAcumulado: null,
                interesGanado: null
            });
        };

        // Efecto para ocultar el error después de 5 segundos
        useEffect(() => {
            if (hayError) {
                const timer = setTimeout(() => {
                    setHayError(false);
                }, 5000);
                return () => clearTimeout(timer);
            }
        }, [hayError]);

        return (
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4 text-primary">Planificador de Ahorro</h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="card-title mb-0">Calcula tu plan de ahorro</h4>
                                </div>

                                <div className="card-body">
                                    {hayError && (
                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong>Error:</strong> Por favor, ingresa valores válidos para la meta y el plazo.
                                            <button type="button" className="btn-close" onClick={() => setHayError(false)}></button>
                                        </div>
                                    )}

                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="metodoAhorro" className="form-label">Método de ahorro</label>
                                            <select
                                                id="metodoAhorro"
                                                className="form-select"
                                                value={metodoAhorro}
                                                onChange={handleMetodoChange}
                                            >
                                                <option value="fijo">Ahorro fijo (misma cantidad cada mes)</option>
                                                <option value="creciente">Ahorro creciente (cada mes más)</option>
                                                <option value="decreciente">Ahorro decreciente (cada mes menos)</option>
                                                <option value="porcentaje">Ahorro por porcentaje de ingresos</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="meta" className="form-label">¿Cuánto dinero necesitas ahorrar?</label>
                                            <div className="input-group">
                                                <span className="input-group-text">$</span>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="meta"
                                                    value={meta}
                                                    onChange={handleMetaChange}
                                                    placeholder="10000"
                                                    min="0"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="plazoMeses" className="form-label">¿En cuántos meses quieres alcanzar tu meta?</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="plazoMeses"
                                                value={plazoMeses}
                                                onChange={handlePlazoMesesChange}
                                                placeholder="12"
                                                min="1"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="ahorroInicial" className="form-label">¿Cuánto tienes ahorrado actualmente? (opcional)</label>
                                            <div className="input-group">
                                                <span className="input-group-text">$</span>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="ahorroInicial"
                                                    value={ahorroInicial}
                                                    onChange={handleAhorroInicialChange}
                                                    placeholder="0"
                                                    min="0"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="tasaInteres" className="form-label">Tasa de interés anual (%) (opcional)</label>
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="tasaInteres"
                                                    value={tasaInteres}
                                                    onChange={handleTasaInteresChange}
                                                    placeholder="0"
                                                    min="0"
                                                    step="0.01"
                                                />
                                                <span className="input-group-text">%</span>
                                            </div>
                                            <div className="form-text">
                                                Si tienes una cuenta de ahorro con interés o inversiones, ingresa la tasa anual estimada.
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={calcularAhorro}
                                            >
                                                Calcular
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={reiniciarCalculadora}
                                            >
                                                Reiniciar
                                            </button>
                                        </div>
                                    </form>

                                    {mostrarResultado && resultado.ahorroMensual !== null && (
                                        <div className="mt-4">
                                            <div className="card bg-light">
                                                <div className="card-header bg-info text-white">
                                                    <h5 className="mb-0">Resultados del cálculo</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="mb-3">
                                                        <h6 className="text-muted mb-1">Ahorro mensual necesario:</h6>
                                                        <h3 className="text-primary mb-0">${resultado.ahorroMensual.toFixed(2)}</h3>
                                                    </div>

                                                    <hr className="my-3" />

                                                    <div className="mb-3">
                                                        <h6 className="text-muted mb-1">Total acumulado al final:</h6>
                                                        <h4 className="text-dark mb-0">${resultado.totalAcumulado?.toFixed(2)}</h4>
                                                    </div>

                                                    {resultado.interesGanado !== null && resultado.interesGanado > 0 && (
                                                        <div className="mb-3">
                                                            <hr className="my-3" />
                                                            <h6 className="text-muted mb-1">Intereses ganados:</h6>
                                                            <h4 className="text-success mb-0">+${resultado.interesGanado.toFixed(2)}</h4>
                                                        </div>
                                                    )}

                                                    <div className="alert alert-secondary mt-3">
                                                        <p className="mb-0">
                                                            Ahorrando <strong>${resultado.ahorroMensual.toFixed(2)}</strong> cada mes durante <strong>{plazoMeses}</strong> meses
                                                            alcanzarás tu meta de <strong>${typeof meta === 'number' ? meta.toFixed(2) : '0.00'}</strong>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    export default CalculadoraAhorro;