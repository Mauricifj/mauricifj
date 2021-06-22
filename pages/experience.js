import Card from './components/card';
import Meta from './components/meta';
import Navbar from './components/navbar';

function Experience () {
    return (
        <div>
            <Meta />
            
            <Navbar />

            <main>
                <h1 style={{textAlign: 'center', margin: '2rem'}}>Experience</h1>

                <Card 
                    logo="braspag.jpeg" 
                    title="Braspag" 
                    subtitle="Mobile Developer" 
                    contents={[
                        {
                            header: "CANAIS TEAM",
                            lines: [
                                "Braspag is the e-commerce division of Cielo (the largest Brazilian credit and debit card operator).",
                                "Participated in the development of SplitLio, an app for Lio V2 (Smart card reader of Cielo) to offer marketplace participants the ability to accept payments (marketplace can take its share) without the need for their own card reader.",
                                "Designed, developed and delivered SDKs using PHP (Composer), Node.js (npm), Kotlin (Travis + Bintray JCenter) and Flutter (pub.dev) to help customer to integrate in Braspag services more easily.",
                                "Experience with bluetooth communication between mobile app and card readers (PAX D150 and Ingenico ICM122).",
                                "Developed backend tasks using C# .Net Core when needed.",
                                "I write, modify, integrate and test software code, I also maintain existing apps by making modifications as required."
                            ]
                        },
                    ]}
                    footer="Jul 2019 - Present"
                    link="https://braspag.com.br"
                />

                <Card 
                    logo="braspag.jpeg" 
                    title="Braspag" 
                    subtitle="Intern" 
                    contents={[
                        {
                            header: "OPERATIONS AND INTEGRATIONS TEAM",
                            lines: ["Started as member of Integration and Operation Team, I supported developers to integrate in Braspag services.", "\xa0"]
                        },
                        {
                            header: "INNOVATION TEAM",
                            lines: [
                                "I migrated to Innovation Team as developer intern, I learned how to use programming languages, frameworks and technologies to add more value to products and businesses.",
                                "I worked with PHP, C#, JavaScript (Node.js and React), Kotlin, Docker, Kubernetes and Azure.",
                                {item: "PHP", li: true},
                                {item: "C#", li: true},
                                {item: "JavaScript (Node.js and React)", li: true},
                                {item: "Kotlin", li: true},
                                {item: "Docker", li: true},
                                {item: "Kubernetes", li: true},
                                {item: "Azure", li: true},
                            ]
                        }
                    ]}
                    footer="Sep 2017 - Jul 2019" 
                    link="https://braspag.com.br"
                />
            </main>
        </div>
    );
}

export default Experience;