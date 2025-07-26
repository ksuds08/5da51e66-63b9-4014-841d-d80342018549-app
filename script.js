$(document).ready(function() {
    $('button').click(function() {
        const templateType = $(this).siblings('h3').text();
        $.ajax({
            url: '/functions/api/handler.ts',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ template: templateType }),
            success: function(response) {
                alert('Template selected: ' + templateType + '\n' + response.message);
            }
        });
    });
});