/* ============================================================
   DEPILACIÓN LASER MALDONADO — script.js
   ============================================================ */

/* ======================== DATOS DE ZONAS ======================== */
const zoneData = {
    'axilas': {
        title: 'Axilas',
        price: '$700',
        fullDesc: 'La zona de axilas es una de las más solicitadas. El tratamiento láser permite eliminar el vello de forma definitiva, reduciendo además la hiperpigmentación y la irritación que suelen causar otros métodos de depilación. Los resultados son visibles desde la primera sesión.',
        woman: 'En mujeres, el resultado es una axila completamente limpia, sin manchas y sin necesidad de afeitado continuo. Ideal para sentirse cómoda en cualquier momento.',
        man: 'En hombres, se reduce y elimina el exceso de vello en la zona axilar, mejorando la higiene y el confort. Totalmente seguro y efectivo.',
        prep: 'Rasurá la zona el día anterior a la sesión, bien al ras. No utilices cera ni pinza al menos 4 semanas antes. Evitá exposición solar directa en las 48 hs previas.'
    },
    'media-pierna-baja': {
        title: 'Media pierna baja',
        price: '$1.200',
        fullDesc: 'Comprende el sector desde el tobillo hasta la rodilla. Es una zona de gran demanda por la comodidad que brinda en el día a día, especialmente en verano. El láser actúa con precisión sobre los folículos, logrando resultados progresivos y permanentes.',
        woman: 'En mujeres es una de las zonas más frecuentes. Permite lucir piernas perfectamente depiladas en todo momento sin esfuerzo.',
        man: 'En hombres se aplica para reducir el exceso de vello, logrando un aspecto más prolijo sin eliminar completamente el vello si no se desea.',
        prep: 'Rasurá la zona el día anterior con máquina o afeitadora, bien al ras. No uses cera ni pinza. Llegá con la piel limpia y sin cremas en la zona a tratar.'
    },
    'media-pierna-alta': {
        title: 'Media pierna alta',
        price: '$1.400',
        fullDesc: 'Comprende desde la rodilla hasta la ingle. El tratamiento es efectivo para reducir el vello de esta zona más sensible. Se complementa perfectamente con media pierna baja para cubrir la pierna entera en etapas.',
        woman: 'Las mujeres suelen combinar esta zona con pierna baja o cavado para un tratamiento completo e integral.',
        man: 'En hombres es ideal para definir y reducir el vello del muslo, especialmente para quienes practican deportes o buscan mayor higiene en la zona.',
        prep: 'Rasurá la zona el día anterior. Evitá exposición solar 48 hs antes y después de la sesión. No apliques cremas autobronceantes en el área.'
    },
    'pierna-entera': {
        title: 'Pierna entera',
        price: '$2.500',
        fullDesc: 'Cobertura total desde el tobillo hasta la ingle. Es la opción más completa para quienes buscan la máxima libertad y confort. Incluye toda la pierna en una única sesión, optimizando tiempos y resultados.',
        woman: 'El tratamiento más elegido por mujeres. Permite tener piernas perfectas en cualquier estación del año, sin rastros de vello ni irritación.',
        man: 'Muy solicitado por hombres deportistas. Se adapta la intensidad según el grosor y densidad del vello, logrando una reducción notable.',
        prep: 'Rasurá ambas piernas el día anterior bien al ras. Llegá con ropa cómoda que permita acceder fácilmente a la zona. Evitá exposición solar 48 hs previas.'
    },
    'cavado-bikini': {
        title: 'Cavado bikini',
        price: '$800',
        fullDesc: 'El cavado bikini comprende la línea exterior de la zona íntima, la parte que queda visible con traje de baño. Es un tratamiento discreto y rápido, ideal para mantener la zona prolija durante todo el año.',
        woman: 'Permite usar cualquier tipo de ropa interior o traje de baño con total confianza, sin preocupaciones por el vello visible.',
        man: 'Se aplica para definir los bordes de la zona inguinal, muy solicitado por hombres que practican natación o deportes acuáticos.',
        prep: 'Rasurá la zona el día anterior. Evitá la cera o pinza al menos 4 semanas antes. La zona debe estar completamente limpia en el momento de la sesión.'
    },
    'cavado-completo': {
        title: 'Cavado completo',
        price: '$1.100',
        fullDesc: 'El cavado completo abarca toda la zona íntima, incluyendo la parte interna y anterior. Es el tratamiento más solicitado para máxima higiene y confort. Los resultados son duraderos y significativos desde las primeras sesiones.',
        woman: 'Brinda total libertad y confort. Ideal para quienes desean eliminar por completo el vello de la zona íntima de manera definitiva.',
        man: 'Muy recomendado para ciclistas, nadadores y quienes buscan máxima higiene en la zona. Ezequiel es el especialista en esta zona para hombres en Maldonado.',
        prep: 'Rasurá la zona el día anterior bien al ras. Realiza una higiene completa de la zona antes de concurrir. No vayas depilada con cera ni pinza.'
    },
    'tira-de-cola': {
        title: 'Tira de cola',
        price: '$650',
        fullDesc: 'La tira de cola es la zona posterior del cavado, entre los glúteos. El tratamiento es preciso y técnico, realizado con total profesionalismo y higiene. Muchas personas lo combinan con cavado bikini o completo para resultados integrales.',
        woman: 'Complemento perfecto para un cavado completo. Exige delicadeza técnica que nuestros profesionales dominan a la perfección.',
        man: 'Muy solicitado por hombres que desean mayor higiene en la zona posterior íntima. Se realiza con total discreción y profesionalismo.',
        prep: 'Rasurá la zona el día anterior. Llegá con la zona limpia. Se recomienda combinar con cavado completo para mejores resultados.'
    },
    'gluteos': {
        title: 'Glúteos',
        price: '$1.000',
        fullDesc: 'El tratamiento en la zona de glúteos elimina el vello superficial de manera definitiva. Es un área que suele generar incomodidad con los métodos tradicionales de depilación, y el láser resuelve esto de forma rápida y efectiva.',
        woman: 'Permite lucir con confianza en la playa, el gimnasio o cualquier situación. La zona queda completamente lisa y sin irritación.',
        man: 'Muy frecuente en hombres que buscan mayor higiene o que el exceso de vello les genera incomodidad o calor en la zona.',
        prep: 'Rasurá la zona el día anterior bien al ras. Llegá con ropa cómoda. La sesión es rápida y muy efectiva.'
    },
    'manos': {
        title: 'Manos',
        price: '$500',
        fullDesc: 'Incluye el dorso de la mano y los dedos. Es una zona pequeña pero que genera mucha incomodidad en quienes tienen vello visible en esa área. El láser actúa con precisión para resultados perfectos.',
        woman: 'Permite tener manos perfectas en todo momento, especialmente en ocasiones en que las manos son protagonistas.',
        man: 'El vello en el dorso de la mano y en los nudillos es muy común en hombres. El láser lo elimina definitivamente de forma natural.',
        prep: 'Rasurá los vellos del dorso y dedos con mucho cuidado el día anterior. Llegá sin cremas ni lociones en las manos.'
    },
    'pies': {
        title: 'Pies',
        price: '$500',
        fullDesc: 'Comprende los dedos y el empeine de los pies. Aunque es una zona pequeña, el vello en los pies puede generar incomodidad estética. El láser lo elimina de forma definitiva y sin dolor.',
        woman: 'Ideal para quienes usan sandalias o van a la playa y desean que sus pies se vean impecables sin mantenimiento constante.',
        man: 'El vello en los dedos del pie es frecuente en hombres. El tratamiento es rápido y con resultados permanentes.',
        prep: 'Rasurá la zona el día anterior. Llegá con la zona limpia y sin esmalte ni cremas. Es uno de los tratamientos más rápidos.'
    },
    'brazo-medio': {
        title: 'Brazo medio',
        price: '$800',
        fullDesc: 'Comprende desde el codo hasta la muñeca. Es una zona habitual en quienes tienen vello oscuro o abundante en el antebrazo. El láser reduce y elimina el vello de forma progresiva logrando un resultado natural.',
        woman: 'Muy solicitado en mujeres que sienten incomodidad con el vello del antebrazo. Los resultados son suaves y naturales.',
        man: 'Permite definir el aspecto del brazo sin eliminar todo el vello si no se desea. Se adapta la intensidad según la preferencia del cliente.',
        prep: 'Rasurá la zona el día anterior bien al ras. Evitá cremas con fragancia o autobronceantes en la zona tratada 48 hs antes.'
    },
    'brazo-entero': {
        title: 'Brazo entero',
        price: '$1.200',
        fullDesc: 'Cobertura completa del brazo, desde el hombro hasta la muñeca. Es la opción más completa para quienes buscan resultados integrales en la zona de los brazos. Se trata toda la superficie en una única sesión.',
        woman: 'Elimina totalmente el vello de los brazos, permitiendo usar cualquier tipo de ropa con absoluta confianza.',
        man: 'Muy efectivo para hombres que desean reducir significativamente el vello del brazo sin eliminarlo por completo.',
        prep: 'Rasurá todo el brazo el día anterior. Llegá con ropa de manga corta o sin mangas para un acceso cómodo a la zona.'
    },
    'cuello': {
        title: 'Cuello',
        price: '$750',
        fullDesc: 'Se puede tratar el cuello anterior (parte delantera) o posterior (parte trasera), o ambos. Es una zona visible que con el tratamiento láser queda completamente prolija. Muy solicitada tanto en hombres como en mujeres.',
        woman: 'El cuello posterior es frecuente en mujeres que usan el pelo recogido. El resultado es muy prolijo y natural.',
        man: 'El cuello es una de las zonas más tratadas en hombres. El láser permite mantener el cuello perfectamente definido sin afeitado constante.',
        prep: 'Rasurá la zona el día anterior. Si es cuello posterior, llegá con el pelo recogido. Evitá perfumes o colonias en la zona 24 hs antes.'
    },
    'nuca': {
        title: 'Nuca',
        price: '$650',
        fullDesc: 'La zona de la nuca es ideal para quienes desean mantener un aspecto prolijo en la parte trasera del cuello. Se trabaja con precisión para lograr una línea limpia y definida, permanente.',
        woman: 'Muy solicitado por mujeres que usan el pelo recogido con frecuencia. El resultado es una nuca perfectamente definida.',
        man: 'Es uno de los tratamientos más populares en hombres. Permite mantener el corte de cabello con bordes precisos sin visitas frecuentes a la peluquería.',
        prep: 'Rasurá la nuca el día anterior con cuidado. Llegá con el cabello recogido o corto. La sesión es muy rápida.'
    },
    'espalda-media': {
        title: 'Espalda media',
        price: '$1.400',
        fullDesc: 'Comprende la zona lumbar y la parte central de la espalda. Es un área de abundante vello en muchos casos, y el tratamiento láser la resuelve de forma definitiva. Se trabaja zona por zona con precisión.',
        woman: 'Aunque menos frecuente en mujeres, se realiza con excelentes resultados. Permite usar prendas de espalda abierta con toda confianza.',
        man: 'Muy solicitada en hombres. La espalda media es una de las zonas más complejas para depilar con métodos tradicionales. El láser es la solución definitiva.',
        prep: 'Rasurá la zona el día anterior con ayuda si es necesario. Llegá con ropa cómoda. La sesión se realiza en posición cómoda boca abajo.'
    },
    'espalda-completa': {
        title: 'Espalda completa',
        price: '$2.100',
        fullDesc: 'Cubre toda la espalda, desde los hombros hasta la zona lumbar. Es el tratamiento más completo para esta área y brinda resultados espectaculares, especialmente en personas con vello abundante. Cada sesión cubre toda la superficie en una vez.',
        woman: 'Ideal para mujeres que desean usar ropa con espalda abierta sin ninguna preocupación estética.',
        man: 'Uno de los tratamientos estrella para hombres. La espalda completa libre de vello es el resultado más solicitado por clientes masculinos.',
        prep: 'Rasurá toda la espalda el día anterior, preferentemente con ayuda. Llegá con una remera sin espalda o fácil de remover. La sesión lleva unos 30 minutos.'
    },
    'pecho': {
        title: 'Pecho',
        price: '$1.400',
        fullDesc: 'Incluye toda la zona pectoral. Es una de las áreas con mayor demanda en hombres y también se trata en mujeres según necesidad. El láser actúa con precisión logrando resultados notorios desde la primera sesión.',
        woman: 'En mujeres se trabaja el área periareolar y esternal, logrando un resultado muy natural y discrecto.',
        man: 'En hombres es uno de los tratamientos más solicitados. Permite tener el pecho perfectamente depilado o simplemente reducido según la preferencia.',
        prep: 'Rasurá la zona el día anterior bien al ras. Llegá con una remera cómoda. Evitá cremas o colonias en la zona el día de la sesión.'
    },
    'abdomen': {
        title: 'Abdomen',
        price: '$1.200',
        fullDesc: 'Comprende la zona del abdomen y la línea alba. El tratamiento es efectivo para eliminar el vello abdominal que resulta incómodo estéticamente. Los resultados son visibles y progresivos.',
        woman: 'Muy solicitado por mujeres que desean eliminar el vello de la línea del ombligo y la zona baja del abdomen.',
        man: 'En hombres se puede tratar todo el abdomen o solo la línea alba. El resultado es muy valorado por quienes cuidan su imagen corporal.',
        prep: 'Rasurá la zona el día anterior. Llegá sin cremas ni lociones en el abdomen. Ropa cómoda que permita acceder fácilmente a la zona.'
    },
    'barba': {
        title: 'Barba',
        price: '$1.600',
        fullDesc: 'El tratamiento de barba láser permite definir y modelar la barba de forma permanente, o bien eliminarla por completo. Es ideal para hombres que desean un contorno perfectamente definido sin afeitado diario. Ezequiel, nuestro especialista masculino, domina esta técnica.',
        woman: 'En mujeres se aplica para reducir el vello de la zona mandibular, especialmente en casos de hirsutismo o vello oscuro poco deseado.',
        man: 'Permite definir el perfil de la barba con absoluta precisión. Los resultados son permanentes y naturales. Se puede modelar completamente a gusto del cliente.',
        prep: 'Dejá crecer la barba al menos 2 días antes para poder afeitar al ras el día anterior. Llegá con la zona limpia y sin aftershave.'
    },
    'cabeza': {
        title: 'Cabeza',
        price: '$1.800',
        fullDesc: 'El tratamiento capilar de cabeza permite reducir el cabello o tratar zonas específicas del cuero cabelludo. Es un procedimiento especializado que requiere técnica precisa. Ideal para quienes usan rasurado al cero o desean reducir zonas específicas.',
        woman: 'Se aplica en casos específicos como reducción de entradas, línea de implantación irregular o zonas puntuales de exceso.',
        man: 'Muy utilizado por hombres que llevan la cabeza rasurada y desean reducir el ritmo de crecimiento o eliminar el vello de forma definitiva.',
        prep: 'Rasurá la cabeza completamente el día anterior al ras. Llegá con la zona limpia. El especialista evaluará la densidad y grosor capilar antes de la sesión.'
    },
    'bozo': {
        title: 'Bozo',
        price: '$500',
        fullDesc: 'El labio superior es una zona muy solicitada, especialmente en mujeres. El vello oscuro en esta área puede ser motivo de incomodidad. El láser lo elimina con gran precisión, resultados naturales y sin cicatrices.',
        woman: 'Es uno de los tratamientos faciales más solicitados por mujeres. El resultado es inmediato y muy visible. El láser respeta por completo la integridad de la piel.',
        man: 'En hombres se aplica para redefinir la zona del labio superior o para reducir el vello de la transición entre el labio y la barba.',
        prep: 'Rasurá la zona con cuidado el día anterior. No utilices cera ni pinza en las semanas previas. Llegá sin maquillaje en esa zona.'
    },
    'menton': {
        title: 'Mentón',
        price: '$500',
        fullDesc: 'El mentón es una zona muy frecuente en tratamientos faciales. El vello en esta área, especialmente cuando es oscuro, resulta visualmente notorio. El láser lo trata con alta precisión dejando la zona completamente limpia.',
        woman: 'El vello en el mentón es común en mujeres y puede generar inseguridad. El tratamiento es rápido, efectivo y con resultados duraderos.',
        man: 'En hombres se puede trabajar la parte inferior del mentón para redefinir los bordes de la barba o eliminar el vello de esa zona.',
        prep: 'Rasurá la zona el día anterior. No utilices cera ni pinza. Llegá sin maquillaje o productos aplicados en la zona.'
    },
    'patillas': {
        title: 'Patillas',
        price: '$650',
        fullDesc: 'Las patillas son la zona lateral del rostro, entre la oreja y la mejilla. El tratamiento láser permite definir y modelar el contorno del rostro de forma permanente. Es una zona que requiere precisión técnica.',
        woman: 'El vello en las patillas puede resultar incómodo en mujeres. El tratamiento es muy natural y respeta la armonía del rostro.',
        man: 'Permite modelar el contorno de las patillas con total precisión, manteniendo el perfil deseado de forma permanente.',
        prep: 'Rasurá la zona el día anterior. Evitá afeitarte con máquina por la cara completa si no querés que se mezclen zonas. Llegá sin aftershave.'
    },
    'pomulos': {
        title: 'Pómulos',
        price: '$650',
        fullDesc: 'La zona de los pómulos es tratada en personas que tienen vello visible en las mejillas. El láser actúa con delicadeza en esta área del rostro, respetando la piel sensible y logrando resultados muy naturales.',
        woman: 'En mujeres con vello oscuro o de mayor densidad en los pómulos, el tratamiento mejora notablemente la uniformidad y suavidad del rostro.',
        man: 'En hombres se trabaja para reducir o eliminar el vello de las mejillas y definir los bordes de la barba en esta zona.',
        prep: 'Rasurá la zona con mucho cuidado el día anterior. No apliques cremas faciales o maquillaje en la zona el día de la sesión.'
    },
    'entrecejo': {
        title: 'Entrecejo',
        price: '$500',
        fullDesc: 'El entrecejo es la zona entre las cejas. El tratamiento láser permite eliminar de forma permanente el vello de esta área, manteniendo las cejas perfectamente separadas sin necesidad de depilación frecuente.',
        woman: 'Ideal para mujeres que se depilas el entrecejo habitualmente. Elimina la rutina de mantenimiento para siempre.',
        man: 'Cada vez más solicitado por hombres que desean un aspecto cuidado y prolijo en el rostro sin esfuerzo.',
        prep: 'Rasurá el vello del entrecejo el día anterior con mucho cuidado. No uses cera ni pinza. La sesión es muy breve y precisa.'
    },
    'frente': {
        title: 'Frente',
        price: '$500',
        fullDesc: 'El tratamiento de frente trabaja la línea de implantación del cabello y la zona frontal. Permite definir y elevar la línea capilar de forma permanente, o bien tratar el "baby hair" o el vello superficial de la frente.',
        woman: 'Muy solicitado por mujeres que desean una frente más despejada o una línea de cabello más prolija y definida.',
        man: 'En hombres se aplica para corregir la línea de nacimiento del cabello o tratar el vello fino de la zona frontal.',
        prep: 'Rasurá el vello de la zona a tratar el día anterior. Llegá sin maquillaje ni cremas en la frente. Si usás flequillo, recogelo durante la sesión.'
    }
};

/* ======================== DOM REFERENCES ======================== */
const hamburger      = document.getElementById('hamburger');
const navLinks       = document.getElementById('navLinks');
const navbar         = document.getElementById('navbar');
const modalOverlay   = document.getElementById('modalOverlay');
const modalClose     = document.getElementById('modalClose');
const modalCTA       = document.getElementById('modalCTA');
const modalTitle     = document.getElementById('modalTitle');
const modalPriceBadge = document.getElementById('modalPriceBadge');
const modalDesc      = document.getElementById('modalDesc');
const modalWoman     = document.getElementById('modalWoman');
const modalMan       = document.getElementById('modalMan');
const modalPrep      = document.getElementById('modalPrep');



/* ======================== HAMBURGER MENU ======================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ======================== NAVBAR ON SCROLL ======================== */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ======================== ACTIVE NAV LINK ON SCROLL ======================== */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { passive: true });

/* ======================== SCROLL REVEAL ======================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======================== MODAL DE ZONAS ======================== */
const WA_NUMBER = '59891504410';

function openModal(zoneKey) {
    const data = zoneData[zoneKey];
    if (!data) return;

    modalPriceBadge.textContent = `${data.price} / sesión`;
    modalTitle.textContent      = data.title;
    modalDesc.textContent       = data.fullDesc;
    modalWoman.textContent      = data.woman;
    modalMan.textContent        = data.man;
    modalPrep.textContent       = data.prep;

    const waMsg = encodeURIComponent(`Hola! Quiero consultar sobre depilación láser en ${data.title}.`);
    modalCTA.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.zone-card[data-zone]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.zone));
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});


/* ======================== SMOOTH SCROLL (offset navbar) ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        // Don't hijack modal CTA
        if (anchor.id === 'modalCTA') return;

        e.preventDefault();
        const top = target.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
