import Card from './components/card';
import Meta from './components/meta';
import Navbar from './components/navbar';

function About () {
    return (
        <div>
            <Meta />
            
            <Navbar />

            <main>
                <h1 style={{textAlign: 'center', margin: '2rem'}}>About me</h1>

                <Card 
                    logo="profile.jpg" 
                    title="Maurici Ferreira Junior" 
                    contents={[
                        {
                            lines: [
                                "Expert knowledge of Kotlin and Flutter acquired by designing, developing and delivering apps and SDKs, also by using third parties SDKs like Google Pay, Cardinal etc.",
                                // TODO: Needs a better solution
                                "\xa0",
                                "Automated builds using Travis and published packages on Bintray (JCenter).",
                                // TODO: Needs a better solution
                                "\xa0",
                                "Experience working within a continuous integration and deployment (CI/CD) environment and with RESTful web services.",
                            ]
                        },
                    ]}
                    link="https://www.linkedin.com/in/mauricifj/"
                />
            </main>
        </div>
    );
}

export default About;