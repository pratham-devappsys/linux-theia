<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Single File App</title>

  <style>
    /* Hide Activity Bar */
    .lm-TabBar[data-orientation="vertical"] {
      display: none !important;
    }

    /* Hide sidebar icons */
    .lm-Widget.theia-sidebar-menu i {
      display: none !important;
    }

    /* Hide sidebar completely */
    .theia-sidebar {
      display: none !important;
    }

    /* Hide status bar */
    .theia-statusBar {
      display: none !important;
    }
  </style>

</head>

<body>
  <div class="theia-preload">./resources/preload.html</div>
  <script src="./bundle.js"></script>
</body>
</html>