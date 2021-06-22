import Card from './components/card';
import Meta from './components/meta';
import Navbar from './components/navbar';

function Portfolio () {
    return (
        <div>
            <Meta />
            
            <Navbar />

            <main>
                <h1 style={{textAlign: 'center', margin: '2rem'}}>Portfolio</h1>

                <Card 
                    logo="https://img.shields.io/pub/v/cielo_lio_helper.svg" 
                    title="cielo_lio_helper" 
                    subtitle="Flutter Plugin" 
                    contents={[
                        {
                            header: "A Flutter plugin for Cielo Lio V2",
                            lines: [
                                "For more information about this plugin:",
                                { text: "Check this", address: "https://pub.dev/packages/cielo_lio_helper", information: true },
                                "\xa0",
                                "Source code is available on Github:",
                                { text: "Check this", address: "https://github.com/mauricifj/cielo_lio_helper", information: true },
                                "\xa0",
                                "For more information about Lio V2:",
                                { text: "Check this", address: "https://developercielo.github.io/en/manual/cielo-lio", information: true }
                            ]
                        },
                    ]}
                    footer="Jun 2021"
                    link="https://pub.dev/packages/cielo_lio_helper"
                />
            </main>
        </div>
    );
}

export default Portfolio;