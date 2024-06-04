import ProjectModel from "../model/ProjectDetails/index.js";


const dataBaseInIt = async () => {
    try {
        await ProjectModel.sync({ force: true });
        
        await ProjectModel.create({
            name: 'Travelix',
            images: ['public/Images/Home.jpg'],
            description: 'Travel Agency Website Front End',
            features: [
                'User can Book Travel Destination',
                'User can Book Transport',
                'User can Book Guides',
                'Responsive Design'
            ],
            tools: [
                'React',
                'HTML5',
                'CSS3',
                'Bootstrap'
            ],
            sourceCode: 'https://github.com/Moeez-Iqbal/Travel-Agency-Website-using-HTML-and-CSS'
        });

        await ProjectModel.create({
            name: 'Netflix',
            images: [],
            description: 'Netflix Ui Clone',
            features: [
                'Netflix Ui Clone',
                'Home Page',
                'User ca',
                'Responsive Design'
            ],
            tools: [
                'React',
                'HTML5',
                'CSS3',
                'Bootstrap'
            ],
            sourceCode: 'https://github.com/Moeez-Iqbal/Netflix-clone-using-HTML-and-CSS'
        });

        await ProjectModel.create({
            name: 'Estate Explorer',
            images: [],
            description: 'Real Estate Website for Listing Property for Rent and Sell',
            features: [
                'Authentication',
                'CRUD APIs',
                'User can Create Profile',
                'User can list Property',
                'User can interact with customer for making deal'
            ],
            tools: [,
                'Reactjs',
                'Nodejs',
                'Expressjs',
                'PostgreSQL',
                'HTML5',
                'CSS3',
            ],
            sourceCode: 'https://github.com/Moeez-Iqbal/Real-Estate-Estate-Explorer-'
        });

        console.log('Initial data added successfully.');
    } catch (error) {
        console.error('Error adding initial data:', error);
    }
};

export default dataBaseInIt;
