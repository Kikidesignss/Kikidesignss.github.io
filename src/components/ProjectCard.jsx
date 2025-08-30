import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '1.5rem',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: '1rem',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '1rem' }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{
            width: 500,
            height: 300,
            borderRadius: 10,
            border: '3px solid black',
          }}
        />
      </div>

      <div style={{ textAlign: 'center', width: '100%' }}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>
          <strong>Skills:</strong> {project.skills.join(', ')}
        </p>
        <p>
          <strong>Purpose:</strong> {project.purpose}
        </p>

        {project.features && project.features.length > 0 && (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '1rem',
    }}
  >
    <strong style={{ marginBottom: '0.1rem' }}>Features:</strong>
    <ul style={{ paddingLeft: '1.2rem', textAlign: 'left' }}>
      {project.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
)}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#006400',
              color: 'white',
              borderRadius: 5,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
}
