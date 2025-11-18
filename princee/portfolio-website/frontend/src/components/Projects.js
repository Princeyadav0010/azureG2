import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/portfolio');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project._id} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;