import React from 'react';
import Layout from '../components/Layout'; // Layout component provides a consistent page structure
import Resume from '../components/resume/ResumeSection'; // Section for displaying hotels 

export default function ResumePage() {
  return (
    <Layout>
      <Resume />
    </Layout>
  );
}
