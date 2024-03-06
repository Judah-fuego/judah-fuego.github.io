$(document).ready(function () {
    // Custom function to toggle pop-out mode on click
    $('#photoGallery li').on('click', function () {
        var $this = $(this);
        if ($this.hasClass('popout')) {
            $this.removeClass('popout');
        } else {
            $this.addClass('popout');
        }
    });
});