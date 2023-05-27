<script lang="js">
  import { onMount } from 'svelte';
  import banner from './assets/images/banner.png';
  import {TechStacks} from './libs/TechStacks';
  import {Projects} from './libs/Projects';

  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let scroll = {
    x: window.scrollX,
    y: window.scrollY,
  };
  let expandNavbar = '';

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
    // console.log(isDarkMode);
  };

  function handleScroll(){
    scroll.y = window.scrollY;
  };

  function handleMouse(event){

  };

  $: {
    expandNavbar = scroll.y > 400 ? 'expand' : '';
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
    <div class="banner-img" style="background-image: url({banner});">
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
    <h2 class="title">My Projects</h2>
    {#each $Projects as project, i}
      <div class="card">
        {project.name}
      </div>
    {/each}
    <h2 class="title">My Artwork</h2>
    <h2 class="title">Socials</h2>
  </main>
  <footer style="background-image: url({banner});">
    <div class="container"></div>
  </footer>
</div>

<style>
  
</style>
