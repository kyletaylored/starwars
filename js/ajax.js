
(function($){

  $(document).ready(function(){

    $.ajax('http://swapi.co/api/films')

      .done(function(data){
        // If data has results property.
        if (data.results) {
          // Loop through each Film result.
          var results = data.results;

          var sortedData = results.sort(function(a, b) {
            if (a.episode_id > b.episode_id) {
              return 1;
            } else {
              return -1;
            }
          });

          sortedData.forEach(function(item){

            var date = new Date(item.release_date);
            item.year = date.getFullYear();

            // Create mustache template.
            var template = `
            <div class="col-sm-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                <strong>Episode {{episode_id}}: {{title}} </strong>
              </div>
              <div class="panel-body">
                <ul class="list-group">
                <li class="list-group-item">Producers: {{producer}}</li>
                <li class="list-group-item">Director: {{director}}</li>
                <li class="list-group-item">Created: {{year}}</li>
                </ul>
              </div>
              <div class="panel-footer">
                <a href="{{url}}" class="btn btn-primary">View on SWAPI</a>
              </div>
            </div>
            </div>
            `;

            // Render template with item properties.
            var output = Mustache.render(template, item);
            // Append movie output to group.
            $(".movies").append(output);
          });
        }
      })
      .fail(function(error){
        $(".movies").append(error.statusText);
      });
  });

})(jQuery);
