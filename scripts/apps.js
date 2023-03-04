<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Ninja Weather</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    type="text/css" />
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="container my-5 mx-auto">
    <h1 class="text-muted text-center my-4">Ninja Weather</h1>

    <form action="" class="change-location my-4 text-center text-muted">
      <label for="city">Enter a location for weather information</label>
      <input type="text" name="city" class="form-control p-4">
    </form>

    <div class="card shadow-lg rounded d-none">
      <img src="https://via.placeholder.com/400X300" class="time card-img-top">
      <div class="icon bg-light mx-auto text-center">
        <img src="" alt="">
      </div>
      <div class="text-muted text-uppercase text-center details">
        <h5 class="my-3">City Name</h5>
        <div class="my-3">Weather Condition</div>
        <div class="display-4 my-4">
          <span>temp</span>
          <span>&deg;C</span>
        </div>
      </div>
    </div>
  </div>
  <script src="scripts/forecast.js"></script>
  <script src="scripts/app.js"></script>

</body>

</html>