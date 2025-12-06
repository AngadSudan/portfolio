"use client";
import ProjectHero from '@/components/Projects/v1/ProjectHero'
import AllProject from './AllProject';
import SmoothScroll from '@/components/lenis-provider';

function V1Project() {
  return (
    <div className='overflow-hidden'>
        <SmoothScroll>
          <ProjectHero />
          <AllProject />
        </SmoothScroll>
    </div>
  )
}

export default V1Project;