import Card from './components/card';
import Meta from './components/meta';
import Navbar from './components/navbar';

function Education () {
    return (
        <div>
            <Meta />
            
            <Navbar />

            <main>
                <h1 style={{textAlign: 'center', margin: '2rem'}}>Education</h1>

                <Card 
                    logo="fatec.png" 
                    title="Fatec de Praia Grande" 
                    subtitle="Systems Analysis and Development" 
                    contents={[
                        {
                            header: "What I learned during this graduation",
                            lines: [
                                { item: "Collect and document users' requirements and develop specifications", li: true },
                                { item: "Collection and documentation of user requirements", li: true },
                                { item: "Plan and design the development, installation, integration and operation of computer-based systems", li: true },
                                { item: "Write, modify, integrate and test software code", li: true },
                                // TODO: Needs a better solution
                                "\xa0",
                                "For more information:",
                                { text: "Check my Educational Credential Assessment", address: "https://www.credly.com/badges/f89f067a-19f3-4f17-ad16-76f8da86aa75", information: true }
                            ]
                        },
                    ]}
                    footer="2017 - 2019"
                    link="https://fatecpg.edu.br/cursos/ads"
                />
            </main>
        </div>
    );
}

export default Education;