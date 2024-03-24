<script setup>
function navlogo_fill_mousein(){
  document.querySelectorAll('.cls-1').forEach(function(element) {
    element.style.fill = '#A1DBFF';
    element.style.stroke = 'none';

  });
}
function navlogo_fill_moustout(){
  document.querySelectorAll('.cls-1').forEach(function(element) {
    element.style.fill = '';
    element.style.stroke = '#282828';
  });
}

</script>

<template>
  <nav
    id="navbar"
    class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    data-bs-theme=""
  >
    <div class="container-fluid">
      <a href="/" id='nav-brand' class="navbar-brand" v-on:mouseover="navlogo_fill_mousein()" v-on:mouseleave="navlogo_fill_moustout()">
        <svg id="name_logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 37">
          <path id="c1" class="cls-1" d="M14.38,25.12c-3.53,0-5.17-1.36-5.17-4.28v-6.53c0-2.94,1.64-4.3,5.17-4.3h5.12c.52,0,.76.23.76.76v2.54c0,.52-.23.76-.76.76h-4.22c-.88,0-1.28.34-1.28,1.05v5c0,.69.4,1.01,1.28,1.01h4.22c.52,0,.76.23.76.76v2.5c0,.52-.23.76-.76.76h-5.12Z"/>
          <path id="k1" class="cls-1" d="M23.39,25.12c-.52,0-.76-.23-.76-.76v-13.61c0-.52.23-.76.76-.76h3.25c.52,0,.76.23.76.76v4.83h.84l2.16-4.89c.21-.5.5-.69,1.05-.69h3.23c.48,0,.65.25.46.69l-2.14,4.89c1.57.08,2.58,1.18,2.58,2.86v5.92c0,.52-.23.76-.76.76h-3.23c-.52,0-.76-.23-.76-.76v-4.09c0-.46-.23-.71-.67-.71h-2.77v4.81c0,.52-.23.76-.76.76h-3.25Z"/>
          <path id="c2" class="cls-1" d="M43.24,25.12c-3.53,0-5.17-1.36-5.17-4.28v-6.53c0-2.94,1.64-4.3,5.17-4.3h5.12c.52,0,.76.23.76.76v2.54c0,.52-.23.76-.76.76h-4.22c-.88,0-1.28.34-1.28,1.05v5c0,.69.4,1.01,1.28,1.01h4.22c.52,0,.76.23.76.76v2.5c0,.52-.23.76-.76.76h-5.12Z"/>
          <path id="k2" class="cls-1" d="M52.25,25.12c-.52,0-.76-.23-.76-.76v-13.61c0-.52.23-.76.76-.76h3.25c.52,0,.76.23.76.76v4.83h.84l2.16-4.89c.21-.5.5-.69,1.05-.69h3.23c.48,0,.65.25.46.69l-2.14,4.89c1.57.08,2.58,1.18,2.58,2.86v5.92c0,.52-.23.76-.76.76h-3.23c-.52,0-.76-.23-.76-.76v-4.09c0-.46-.23-.71-.67-.71h-2.77v4.81c0,.52-.23.76-.76.76h-3.25Z"/>
          <path id="s" class="cls-1" d="M67.53,25.12c-.52,0-.76-.23-.76-.76v-2.46c0-.52.23-.76.76-.76h5.65c.36,0,.55-.27.55-.61,0-.48-.19-.67-.55-.71l-3.15-.44c-1.97-.29-3.25-1.13-3.25-3.49v-2.2c0-2.39,1.62-3.7,4.35-3.7h5.88c.52,0,.76.23.76.76v2.5c0,.52-.23.76-.76.76h-4.89c-.36,0-.57.25-.57.63s.21.63.57.67l3.13.42c1.97.29,3.28,1.13,3.28,3.49v2.2c0,2.39-1.64,3.7-4.35,3.7h-6.63Z"/>
          <path id="n1" class="cls-1" d="M81.12,25.12c-.52,0-.76-.23-.76-.76v-2.54c0-.52.23-.76.76-.76h2.35v-7.01h-1.93c-.52,0-.76-.23-.76-.76v-2.54c0-.52.23-.76.76-.76h6.09c.52,0,.76.23.76.76v10.31h2.02c.52,0,.76.23.76.76v2.54c0,.52-.23.76-.76.76h-9.28Z"/>
          <path id="n9" class="cls-1" d="M95.32,25.12c-.55,0-.76-.23-.76-.76v-2.48c0-.52.23-.76.76-.76h3.93c1.03,0,1.32-.23,1.32-1.26v-.46c-.67.21-1.55.31-2.67.31-3.8,0-4.93-1.28-4.93-3.78v-2.02c0-2.56,1.22-4.24,6.05-4.24,5.17,0,6.3,1.68,6.3,4.24v6.89c0,2.56-1.2,4.3-5.17,4.3h-4.83ZM100.57,14.26c0-.44-.19-.78-1.41-.78s-1.45.34-1.45.78v1.24c0,.42.19.76,1.45.76s1.41-.34,1.41-.76v-1.24Z"/>
          <path id="n92" class="cls-1" d="M109.87,25.12c-.55,0-.76-.23-.76-.76v-2.48c0-.52.23-.76.76-.76h3.93c1.03,0,1.32-.23,1.32-1.26v-.46c-.67.21-1.55.31-2.67.31-3.8,0-4.93-1.28-4.93-3.78v-2.02c0-2.56,1.22-4.24,6.05-4.24,5.17,0,6.3,1.68,6.3,4.24v6.89c0,2.56-1.2,4.3-5.17,4.3h-4.83ZM115.12,14.26c0-.44-.19-.78-1.41-.78s-1.45.34-1.45.78v1.24c0,.42.19.76,1.45.76s1.41-.34,1.41-.76v-1.24Z"/>
          <path id="n7" class="cls-1" d="M133.16,10.76v5.31c0,2.67-1.03,3.49-3.28,4.16l-1.55.46v3.67c0,.52-.23.76-.76.76h-3.4c-.52,0-.76-.23-.76-.76v-3.8c0-2.67,1.03-3.49,3.28-4.16l1.7-.46v-1.89h-5.75c-.52,0-.76-.23-.76-.76v-2.54c0-.52.23-.76.76-.76h9.76c.52,0,.76.23.76.76Z"/>
        </svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.cls-1 {
  fill:  rgba(255,255,255,0);
  stroke: #282828;
  stroke-miterlimit: 10;
}
#name_logo{
  margin-left: 5px;
  width: 100px;
  object-fit: cover;
  stroke-dasharray: 75;
  stroke-dashoffset: -75;
  animation: logo-anim 2s linear .0s forwards;
}

@keyframes logo-anim {
  from {stroke-dashoffset : -75px; fill: rgba(255,255,255,0);}
  to {stroke-dashoffset : 0px; fill: rgba(0,0,0,1);}
}
</style>
