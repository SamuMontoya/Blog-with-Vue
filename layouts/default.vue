<template>
  <div>
    <header>
      <div>
        <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
          <b-navbar-brand href="/">
            <img style="width:2.3rem" src="../assets/logo.png" class="d-inline-block align-top" alt="Kitten" />
            Samu's Blog</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="mr-3" href="#">About Me</b-nav-item>
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >🔍</b-button
                >
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <div style="margin-top:4.5rem">
        <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>
