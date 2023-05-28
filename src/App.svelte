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
    // console.log(isDarkMode);
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
    <div class="hr" style="transform: translateX({mousePosition}px)"></div>
    <h2 class="title">My Projects</h2>
    <div class="card-list">
      {#each $Projects as project, i}
        <div class="card">
          <div class="card-img">
            <img src="{project.banner}" alt="">
          </div>
          <div class="card-body">
            <h3>{project.name}</h3>
            <p>{project.text}</p>
            <ul class="p-0">
              {#each project.stacks as stack}
                <li style="background-color: {$TechStacks[stack].background};">{$TechStacks[stack].name}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
    <h2 class="title">My Artwork</h2>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aut in delectus consequuntur iusto voluptates pariatur? Provident dolores possimus nemo quisquam repellat. Ipsa odio neque fugiat ex libero sapiente harum!
    <div class="hr" style="transform: translateX({mousePosition}px)"></div>
    <h2 class="title">Socials</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate modi facere inventore cum nesciunt necessitatibus tenetur dignissimos deleniti laboriosam. Enim veritatis ad architecto rem non! Reprehenderit mollitia omnis dolor!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum eius veniam et quaerat natus impedit, autem aliquid ea voluptates soluta. Modi quo exercitationem, adipisci illum iusto vel tempora neque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aut in delectus consequuntur iusto voluptates pariatur? Provident dolores possimus nemo quisquam repellat. Ipsa odio neque fugiat ex libero sapiente harum!
  </main>
  <footer style="background-image: url({banner});">
    <div class="container"></div>
  </footer>
</div>

<style>

</style>
