import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import "../css/MetodosAhorro.css";
import CalculadoraAhorro from "../components/CalculadoraAhorro";



function MetodosAhorro() {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState<number | null>(null);
    // Bloquear el scroll cuando el modal está abierto
    useEffect(() => {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        const handlePrev = () => {
            const swiperElement = document.querySelector('.metodos-swiper');
            if (swiperElement && (swiperElement as any).swiper) {
                (swiperElement as any).swiper.slidePrev();
            }
        };

        const handleNext = () => {
            const swiperElement = document.querySelector('.metodos-swiper');
            if (swiperElement && (swiperElement as any).swiper) {
                (swiperElement as any).swiper.slideNext();
            }
        };


        prevButton?.addEventListener('click', handlePrev);
        nextButton?.addEventListener('click', handleNext);

        return () => {
            prevButton?.removeEventListener('click', handlePrev);
            nextButton?.removeEventListener('click', handleNext);
        };
    }, []);
    useEffect(() => {
        if (metodoSeleccionado !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [metodoSeleccionado]);

    const metodos = [
        {
            titulo: "Método 50/30/20",
            descripcionCorta: "50% necesidades, 30% deseos y 20% ahorro y deudas.",
            descripcionLarga:
                "Este método popular divide tus ingresos después de impuestos en tres categorías: 50% para necesidades esenciales (alquiler, comida, transporte), 30% para deseos (ocio, salir a comer, hobbies) y 20% para ahorro e inversión o pago de deudas.\n\n✅ Ventajas: Fácil de aplicar, ideal para principiantes en finanzas personales.\n⚠️ Desventajas: No considera variaciones de ingresos o gastos extraordinarios.\n💡 Consejo: Automatiza el 20% de ahorro configurando una transferencia automática el día de tu pago.",
            color: "#4299e1",
            link: "https://www.youtube.com/watch?v=_bgUUswBttU",
            icono: "💰",
            bgImage: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)"
        },
        {
            titulo: "Método de los sobres",
            descripcionCorta: "Divide tu dinero en sobres/categorías. Cuando se acabe, no gastas más.",
            descripcionLarga:
                "Ideal para controlar el gasto impulsivo. Asigna una cantidad fija de efectivo a diferentes sobres etiquetados por categoría (comida, entretenimiento, gasolina, etc.).\n\n✅ Ventajas: Control visual del gasto, disminuye uso de tarjetas de crédito.\n⚠️ Desventajas: Puede ser incómodo manejar efectivo en algunos contextos.\n💡 Consejo: Usa sobres virtuales o apps si prefieres pagar todo de manera digital.",
            color: "#38b2ac",
            link: "https://www.youtube.com/watch?v=qr9QoQsa61c",
            icono: "✉️",
            bgImage: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
        },
        {
            titulo: "Método Kakebo",
            descripcionCorta: "Diario japonés de gastos: anota todo lo que ganas y gastas.",
            descripcionLarga:
                "El Kakebo, o 'libro de cuentas para la economía doméstica', es un método japonés de presupuesto que se centra en la atención plena sobre tus hábitos de gasto.\n\n✅ Ventajas: Promueve la conciencia financiera profunda.\n⚠️ Desventajas: Puede requerir más tiempo y constancia diaria.\n💡 Consejo: Dedica solo 5 minutos al día para registrar tus movimientos y notarás el cambio.",
            color: "#805ad5",
            link: "https://www.youtube.com/watch?v=2qxXEBK-xV8&t=82s",
            icono: "📝",
            bgImage: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)"
        },
        {
            titulo: "Calculadora",
            descripcionCorta: "Ocupa la siguiente calculadora para calcular cuanto debes ahorrar",
            descripcionLarga:
                "",
            color: "#ecf186",
            icono: "🧮",
            bgImage: "linear-gradient(135deg, #ecf186 0%, #a6efa1 100%)"
        },
    ];

    return (
        <section className="section">
            <h2 className="heading">Métodos de Ahorro</h2>
            <h3 className="subheading">Desliza</h3>
            <div className="swiper-container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    className="metodos-swiper"
                    pagination={{ clickable: true }}
                >
                    {metodos.map((metodo, index) => (
                        <SwiperSlide key={index} className="swiper-slide-custom">
                            <div
                                className="slide-content"
                                style={{
                                    background: metodo.bgImage,
                                }}
                            >
                                <div className="slide-inner">
                                    <div className="slide-icon">{metodo.icono}</div>
                                    <h3 className="slide-titulo">{metodo.titulo}</h3>
                                    <p className="slide-descripcion">{metodo.descripcionCorta}</p>
                                    <button
                                        className="slide-button"
                                        onClick={() => setMetodoSeleccionado(index)}
                                    >
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {metodoSeleccionado !== null && (
                <div
                    className="modal-overlay"
                    onClick={() => setMetodoSeleccionado(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="modal-header"
                            style={{ background: metodos[metodoSeleccionado].bgImage }}
                        >
                            <span className="modal-icon">{metodos[metodoSeleccionado].icono}</span>
                            <h3 className="modal-titulo">{metodos[metodoSeleccionado].titulo}</h3>
                        </div>
                        <div className="modal-descripcion">
                            {metodos[metodoSeleccionado].titulo === "Calculadora" ? (
                                <CalculadoraAhorro />
                            ) : (
                                <>
                                    {metodos[metodoSeleccionado].descripcionLarga.split('\n').map((linea, idx) => (
                                        <p key={idx}>{linea}</p>
                                    ))}
                                    {metodos[metodoSeleccionado].link && (
                                        <div className="modal-link">
                                            <a
                                                href={metodos[metodoSeleccionado].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="modal-link-button"
                                            >
                                                Ver más información 🔗
                                            </a>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <button
                            className="cerrar-modal-boton"
                            onClick={() => setMetodoSeleccionado(null)}
                        >
                            Cerrar
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}

export default MetodosAhorro;