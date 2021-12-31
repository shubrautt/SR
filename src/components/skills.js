import Card from './card'

function Skills() {
    return (
        <div className="skills" id='Skills'>
            <h2>Skills</h2>
            <div className="cards">
                <Card text="HTML" iconName="html5" />
                <Card text="CSS" iconName="css3-alt" />
                <Card text="JS" iconName="js-square" />
                <Card text="React" iconName="react" />
                <Card text="Git" iconName="github" />
                <Card text="Node JS" iconName="node" />
                <Card text="Java" iconName="java" />
            </div>
        </div>
    )
}

export default Skills;