<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=device-dpi, user-scalable=no" />
    <title>Ronald Troyer</title>
    <?php
      if (file_exists('./assets/dist/styles.css')) {
        echo '<link href="./assets/dist/styles.css" rel="stylesheet" />';
      } else {
        echo '<link href="./assets/dist/styles.min.css" rel="stylesheet" />';
      }
    ?>
    <script src="./assets/dist/scripts.js" type="text/javascript"></script>
</head>
<body>
<a id="scroller" class="hidden" href="#header">Home</a>
<main>
  <?php
    include_once "./views/header.php";
    include_once "./views/about.php";
    include_once "./views/social.php";
    include_once "./views/portfolio.php";
    include_once "./views/contact.php";
  ?>
</main>
</body>
</html>
