<template>
  <header
    id="header"
    class="bg-white border-b border-gray-200 w-full top-0 z-10"
  >
    <div
      class="mx-auto flex items-center justify-between flex-wrap px-2 pt-1 lg:px-4 xl:px-6 lg:py-2"
    >
      <div id="mobile-menu__toggler" class="flex lg:hidden">
        <svg-icon
          v-if="!isOpen"
          class="h-8 w-9 stroke-current text-indigo-600"
          name="menu"
          @click="isOpen = !isOpen"
        />

        <svg-icon
          v-if="isOpen"
          class="h-8 w-9 stroke-current text-sm"
          name="X"
          @click="isOpen = !isOpen"
        />
      </div>

      <div
        class="flex-shrink-0 hover:text-purple-900 items-center lg:flex lg:mr-6 lg:py-0 lg:w-2/12 order-first py-4 text-purple-700 transition w-4/12 xl:w-auto"
      >
        <NuxtLink to="/" class="flex ml-2">
          <svg-icon class="h-12 w-28" name="logo" />
        </NuxtLink>
      </div>

      <nav
        id="mobile-menu__items"
        :class="isOpen ? 'flex' : 'hidden'"
        class="flex-grow lg:flex lg:items-center lg:justify-end lg:order-2 lg:w-6/12 order-3 w-8/12 xl:w-auto transition-transform duration-300 ease-out"
      >
        <ol
          class="text-lg font-medium lg:flex lg:justify-around lg:items-center lg:flex-grow-0"
        >
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="block mb-4 mt-3 lg:inline-block lg:mb-0 lg:mt-0 lg:mx-2 xl:mx-4"
          >
            <NuxtLink :to="item.link">
              <span
                class="text-gray-700 hover:text-gray-900 text-base transition"
              >
                {{ item.name }}
              </span>
            </NuxtLink>
          </li>
          <li
            v-if="!isLoggedIn"
            class="block mb-4 lg:inline-block lg:mb-0 lg:mx-2 xl:mx-4"
          >
            <button
              class="bg-primary flex items-center font-medium px-4 py-1 rounded text-white"
            >
              <nuxt-link to="/createAd">
                Nouveau Annonce
              </nuxt-link>
              <svg-icon class="h-3 w-3 fill-current ml-1 mr-0" name="plus" />
            </button>
          </li>
          <li
            v-if="!isLoggedIn"
            class="block mb-4 lg:inline-block lg:mb-0 lg:mx-2 xl:mx-4"
          >
            <button
              class="bg-primary text-white px-4 py-1 rounded font-medium hover:bg-blue-600 transition duration-200 each-in-out"
            >
              Login
            </button>
          </li>
          <li
            v-if="isLoggedIn"
            class="block mb-4 lg:inline-block lg:mb-0 lg:mx-2 xl:mx-4"
          >
            <button class="font-semibold mx-1 px-4 py-2">
              Dashboard
            </button>
          </li>
          <li class="block mb-4 lg:inline-block lg:mb-0 lg:mx-3">
            <dropdown-custom>
              <template #head>
                <svg-icon
                  class="h-6 w-6 stroke-current text-indigo-600"
                  name="en"
                />
              </template>
              <ul class="font-normal">
                <li>
                  <svg-icon class="h-6 w-6 inline mr-2" name="ar" />
                  Arabe
                </li>
                <li>
                  <svg-icon class="h-6 w-6 inline mr-2" name="en" />
                  Anglais
                </li>
                <li>
                  <svg-icon class="h-6 w-6 inline mr-2" name="fr" />
                  Français
                </li>
              </ul>
            </dropdown-custom>
          </li>
        </ol>
      </nav>
    </div>
  </header>
</template>
<script>
// import Dropdown from './DropdownCustom.vue'
export default {
  // components: { Dropdown },
  data () {
    return {
      menuItems: [
        {
          name: 'Services',
          hash: 'services',
          link: '/'
        },
        {
          name: 'Projects',
          hash: 'projects',
          link: '/'
        },
        {
          name: 'Blog',
          hash: 'blog',
          link: '/'
        },
        {
          name: 'Contact',
          hash: 'contact',
          link: '/'
        }
      ],
      isOpen: false,
      role: null
    }
  },
  computed: {
    isLoggedIn () {
      return false
    }
  }
}
</script>
<style scoped>
.transition {
  transition: all 0.2s ease-in-out;
}
</style>
