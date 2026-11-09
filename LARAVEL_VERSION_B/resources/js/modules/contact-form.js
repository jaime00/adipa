$(function () {
    var $form = $('#contact-form');
    var $toast = $('#toast');
    var $toastClose = $('#toast-close');
    var $submitBtn = $('#submit-button');
    var toastTimer = null;

    function validate() {
        var errors = {};
        var name = $form.find('[name="name"]').val().trim();
        var email = $form.find('[name="email"]').val().trim();
        var message = $form.find('[name="message"]').val().trim();

        if (!name) {
            errors.name = 'Il nome è obbligatorio';
        } else if (name.length < 2) {
            errors.name = 'Il nome deve contenere almeno 2 caratteri';
        }

        if (!email) {
            errors.email = "L'email è obbligatoria";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Inserisci un indirizzo email valido';
        }

        if (!message) {
            errors.message = 'Il messaggio è obbligatorio';
        } else if (message.length < 10) {
            errors.message = 'Il messaggio deve contenere almeno 10 caratteri';
        }

        return errors;
    }

    function showError(field, message) {
        var $input = $form.find('[name="' + field + '"]');
        var $error = $('#field-' + field + '-error');
        $input.attr('aria-invalid', 'true').attr('aria-describedby', 'field-' + field + '-error');
        $error.text(message);
    }

    function clearError(field) {
        var $input = $form.find('[name="' + field + '"]');
        var $error = $('#field-' + field + '-error');
        $input.attr('aria-invalid', 'false').removeAttr('aria-describedby');
        $error.text('');
    }

    function clearAllErrors() {
        ['name', 'email', 'message'].forEach(clearError);
    }

    function showToast() {
        $toast.addClass('toast--visible');
        toastTimer = setTimeout(hideToast, 4000);
    }

    function hideToast() {
        clearTimeout(toastTimer);
        $toast.removeClass('toast--visible');
    }

    // Clear error on input
    $form.on('input', 'input, textarea', function () {
        clearError($(this).attr('name'));
    });

    $form.on('submit', function (e) {
        e.preventDefault();
        clearAllErrors();

        var errors = validate();
        var hasErrors = Object.keys(errors).length > 0;

        if (hasErrors) {
            Object.keys(errors).forEach(function (field) {
                showError(field, errors[field]);
            });
            return;
        }

        // Simulate submit
        $submitBtn.prop('disabled', true).html(
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Invio in corso...'
        );

        setTimeout(function () {
            $form[0].reset();
            clearAllErrors();
            $submitBtn.prop('disabled', false).html(
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Invia messaggio'
            );
            showToast();
        }, 1000);
    });

    $toastClose.on('click', hideToast);
});
