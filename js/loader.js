import $ from "jquery";

document.querySelector(
  ".load_nav"
).innerHTML = ` <section class="container-fluid nav_out">
<section class="container nav_in">
  <section class="row py-5 nav_row align-items-center">
    <section class="col col-md-2 nav_left">
     <a href="/"> <img src="/images/logo.png" alt="" /></a>
    </section>
    <ul class="col nav_menus">
      <li>
        <a href="/">Home</a>
      </li>
      <li><a href="/pages/about.html">About</a></li>
      <li><a href="/pages/leadership.html">Leadership</a></li>
      <li><a href="/pages/gallery.html">gallery</a></li>
      <li><a href="/pages/media_coverage.html">media coverage</a></li>
      <li><a href="/pages/blog.html">blogs</a></li>
      <li><a href="/pages/events.html">events</a></li>
      <li><a href="/pages/contact.html">contact</a></li>
    </ul>

    <section class="col hamburger text-end">
      <i class="fa-solid ham fa-bars"></i>
    </section>
  </section>
</section>
</section>`;

$(".hamburger > i").click(() => {
  if (!$(".nav_menus").hasClass("active_navbar")) {
    $(".nav_menus").addClass("active_navbar");
    $(".ham").addClass("fa-xmark");
    // $(".nav_out").css("background", "black");
  } else {
    $(".nav_menus").removeClass("active_navbar");
    $(".nav_out").css("background", "transparent");
    $(".ham").removeClass("fa-xmark");
  }
});

document.querySelector(
  ".load_footer"
).innerHTML = ` <footer class="container-fluid footer_out">
<section class="container footer_in">
  <section class="row footer_row">
    <section class="col footer_left px-0 px-md-4">
      <section class="footer_border">
        <h1 class="footer_heading">
          Get in <br />
          touch
        </h1>
        <form class="input_grid">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="number" placeholder='Phone Number'/>
          <input type="text" placeholder='Comment' />
          <input type="submit" placeholder='Name' />
        </form>
      </section>
    </section>
    <ul class="col footer_right py-5">
      <li><a href="/">home</a></li>
      <li><a href="/pages/about.html">about</a></li>
      <li><a href="/pages/leadership.html">leadership</a></li>
      <li><a href="/pages/terms&condition.html">terms & condition</a></li>
      <li><a href="/pages/privacy_policy.html">privacy policy</a></li>
      <li><a href="/pages/blog.html">blog</a></li>
      <li><a href="/pages/media_coverage.html">media coverage</a></li>
      <li><a href="/pages/gallery.html">gallery</a></li>
    </ul>
  </section>
</section>
</footer>`;
