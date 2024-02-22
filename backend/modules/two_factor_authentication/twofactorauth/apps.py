from django.apps import AppConfig


class TwoFactorAuthenticationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'modules.two_factor_authentication.twofactorauth'
    verbose_name = 'Two Factor Authentication'