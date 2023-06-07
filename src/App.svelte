<script lang="js">
  import { onMount } from 'svelte';
  import banner from './assets/images/banner.png';
  import {TechStacks} from './libs/TechStacks';
  import {Projects} from './libs/Projects';
  import {Artworks} from './libs/Artworks';
  import {Socials} from './libs/Socials';

  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let scroll = {
    x: window.scrollX,
    y: window.scrollY,
  };
  let mouse = {
    x: 0,
    y: 0,
  };

  let expandNavbar = '';
  let mousePosition = 0;

  onMount(() => {
    document.documentElement.setAttribute('dark-mode', localStorage.getItem('dark-mode'));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  });

  function toggleTheme(){ 
    isDarkMode = !isDarkMode;
    localStorage.setItem('dark-mode', String(isDarkMode));
    document.documentElement.setAttribute('dark-mode', String(isDarkMode));
  };

  function handleScroll(){
    scroll.y = window.scrollY;
  };

  function handleMouse(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  $: {
    expandNavbar = scroll.y > 400 ? 'expand' : '';
    mousePosition = mouse.x - (window.innerWidth / 2);
  };
</script>

<div class="wrapper">
  <header class="{expandNavbar}">
    <nav>
      <div class="container">
        <div class="nav-left">
          <h2>nanand.r</h2>
        </div>
        <div class="nav-right">
          <a href="#projects" class="nav-link">Projects</a>
          <button on:click={toggleTheme}>toggle</button>
        </div>
      </div>
    </nav>
  </header>
  <section class="banner">
    <div class="banner-img" style="background-image: url({banner}); z-index: -1;">
      <div class="container">
        <h1 class="title">Hello! I'm Nandana Rafi Ardika</h1>
      </div>
    </div>
    <div class="content container">
      <h2>📚 Student, 💻 Web Programmer, 🎨 Artist</h2>
      <div class="stacks">
        <h2 class="font-light">Tech Stacks</h2>
        <ul class="p-0">
          {#each $TechStacks as stack, i}
            <li style="background-color: {stack.background};">{stack.name}</li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
  <main class="container">
    <div class="hr" style="transform: translateX({mousePosition}px)"></div>
    <h2 class="title">My Projects</h2>
    <div class="card-list">
      {#each $Projects as project, i}
        <article class="card">
          <div class="card-wrapper">
            <div class="card-img">
              <img src="{project.banner}" alt="">
            </div>
            <div class="card-body">
              <h3>{project.name}</h3>
              <div class="card-description">
                <p>{project.text}</p>
                <ul class="p-0">
                  {#each project.stacks as stack}
                    <li style="background-color: {$TechStacks[stack].background};">{$TechStacks[stack].name}</li>
                  {/each}
                </ul>
                <ul class="p-0 link-list">
                  <li style="background-color: #22272E;"><a style="color:white; background-color: transparent !important;" href="{project.url.github}" target="_blank">View on Github</a></li>
                  {#if project.url.web}
                    <li style="background-color: #eee;"><a style="color:black !important; background-color: transparent !important;" href="{project.url.web}" target="_blank">View Live Demo</a></li>
                  {/if}
                </ul>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
    <h2 class="title">My Artwork</h2>
    <div class="grid-list">
      {#each $Artworks as artwork}
        {#if artwork.type == 'image'}
          <div class="grid" style="background-image: url({artwork.url});"></div>
        {:else if artwork.type == 'video'}
          <div class="grid">
            <video autoplay loop width="100%" height="100%">
              <source src="{artwork.url}" type="video/mp4">
            </video>
          </div>
        {/if}
      {/each}
    </div>
    <div class="hr" style="transform: translateX({mousePosition}px)"></div>
    <h2 class="title">Socials</h2>
    <div class="socials">
      <ul>
        {#each $Socials as social}
          <li><a href="{social.url}" target="_blank">{social.name}</a></li>
        {/each}
      </ul>
    </div>
  </main>
  <footer style="background-image: url({banner});">
    <div class="container"></div>
  </footer>
</div>

<style>

</style>
