"use client";
import ProjectHero from '@/components/Projects/v1/ProjectHero'
import AllProject from './AllProject';
import SmoothScroll from '@/components/lenis-provider';
import Header from '@/components/Home/Header';
import Player from '@/components/Home/music';

function V1Project() {
  return (
    <div className='overflow-hidden'>
        <SmoothScroll>
          <Header/>
          <Player/>
          <ProjectHero />
          <AllProject />
        </SmoothScroll>
    </div>
  )
}

export default V1Project;