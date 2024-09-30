import RoadmapCard from './RoadmapCard'

function RoadmapCardContent() {
    return (
        <section className="p-6 bg-gray-100">
      <div className="text-center mb-8" >
        <h1 className="text-3xl font-bold text-gray-900 mb-4 ">Explore Your Career Options</h1>
        <p className="mt-2 text-lg text-gray-700 px-4 sm:px-6 lg:px-8">
        Discovering your career options helps you understand various fields based on your interests and skills. Engaging in internships and research can guide you toward a fulfilling path. Take time to explore different professions to find the one that excites you!
        </p>
      </div>

        <div className="flex flex-wrap justify-center gap-6 p-6">
            <RoadmapCard
                imgSrc="/assets/img/career/engineering.svg"
                heading="Engineering"
                description="Engineering is a diverse and dynamic field that applies scientific and mathematical principles to design, build, and maintain structures, machines, and systems. It encompasses various disciplines, including civil, mechanical, electrical, and software engineering, each contributing to innovative solutions that shape our modern world. By engaging in engineering education, students develop critical thinking and problem-solving skills, preparing them for careers that drive technological advancements and improve everyday life. Whether it’s building bridges, designing software applications, or developing renewable energy systems, engineering plays a vital role in addressing global challenges and creating a sustainable future."
                learnmore="#"
                bgColor='#F0E68C '
            />

            <RoadmapCard
                imgSrc="/assets/img/career/Management.svg"
                heading="Management"
                description="Management is about organizing and coordinating activities to achieve specific goals. It involves planning, leading, and overseeing teams or projects in various areas like business, education, and healthcare. Good management helps ensure that resources, such as time and money, are used efficiently. By learning about management, students can develop important skills like teamwork, decision-making, and problem-solving, which are useful in any career. Whether it's running a school event or managing a project, effective management is key to success."
                learnmore="#"
                bgColor='#D6E8C9 '
            />
            <RoadmapCard
                imgSrc="/assets/img/career/medical.svg"
                heading="Medical"
                description="Medicine is a vital field focused on diagnosing, treating, and preventing illnesses and injuries. It encompasses various specialties, such as pediatrics, surgery, and psychiatry, each dedicated to helping different groups of patients. By studying medicine, students learn how the human body works, how diseases affect it, and how to provide care that improves people's health and quality of life."
                learnmore="#"
                bgColor='#FFDAB9'
            />
            <RoadmapCard
                imgSrc="/assets/img/career/law.svg"
                heading="Law"
                description="Law is a field that involves understanding and applying rules and regulations that govern society. It encompasses various areas, such as criminal law, civil law, and constitutional law, each focused on different aspects of justice and rights. By studying law, students learn how to advocate for fairness, protect individual rights, and resolve disputes, making it a crucial profession for maintaining order and justice in our communities."
                learnmore="#"
                bgColor='#D1C4E9  '
            />
        </div>
        </section>
    )
}

export default RoadmapCardContent