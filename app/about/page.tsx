export default function AboutPage() {
    return (
      <main style={{ textAlign: 'center', marginTop: '50px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.5rem', textTransform: 'uppercase' }}>About Chronovisor</h1>
        <p>
          Chronovisor is an open-source entertainment portal designed to demonstrate how data from various sources can be integrated into one cohesive platform. The project aims to connect developers with historical data in an engaging and visually appealing format.
        </p>
        <h2 style={{ fontSize: '2rem', marginTop: '20px' }}>Origins of the Name</h2>
        <p>
          The name &quot;Chronovisor&quot; originates from a mythical device described by Father François Brune in his 2002 book *The Vatican&apos;s New Mystery*. Allegedly invented by Father Pellegrino Ernetti, this device was said to allow its user to view past events. This project serves as a modern &quot;time machine&quot; for historical exploration.
        </p>
      </main>
    );
  }