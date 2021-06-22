import styles from '../../styles/Card.module.css'

export default function Card({logo, title, subtitle, contents, footer, link = "#"}) {
    return (
        <div className={styles.card}>
            
            <div className={styles.card_header}>
                <a href={link} className={styles.card_logo_link} target="_blank">
                    <img src={logo} className={styles.card_logo} />
                </a>
                <h2 className={styles.card_title}>
                    <a href={link} className={styles.card_link} target="_blank">{title}</a>
                </h2>
                <div className={styles.card_subtitle_container}>
                    <h4 className={styles.card_subtitle}>{subtitle}</h4>
                </div>
            </div>
            
            <div className={styles.card_body}>
                <h3 className={styles.card_subtitle}>{subtitle}</h3>
                {contents?.map(content => {
                    return (
                        <div>
                            <h4>{content.header}</h4>
                            {content.lines.map(line => renderLine(line))}
                        </div>
                    )
                })}
                
            </div>
            <div className={styles.card_footer}>
                <span className={styles.card_footer_text}>{footer}</span>
            </div>
        </div>
    );
}

function renderLine(line) {
    if (line.li)
        return <li>{line.item}</li>;

    if (line.information)
        return <a class={styles.information_link} href={line.address} target="_blank">{line.text}</a>;
        
    return <p>{line}</p>;
}