  var database = firebase.database();
                database.ref().once('value', function(snapshot){
                    if(snapshot.exists()){
                        var content = '';
                        snapshot.forEach(function(data){
                            var val = data.val();
                            content +='<tr>';
                            content += '<td>' + val.Name + '</td>';
                            content += '<td>' + val.Email + '</td>';
                            content += '<td></td>';
                            content += '<td></td>';
                            content += '<td></td>';
                            content += '<td></td>';
                            content += '</tr>';
                        });
                        $('#table_body').append(content);
                    }
                });



<div class="showtheway"><a href="https://showtheway.io/to/32.018656,34.78142?name=Reines%20St%2015-7" target="_blank" title="Show the Way to Reines St 15-7 with your favorite navigation application">Show the Way</a></div><script src="https://showtheway.io/w.js" async="async" type="text/javascript">
    </script>