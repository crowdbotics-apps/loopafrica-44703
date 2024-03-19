from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from .models import Doctor, Instructor, Feedback, Subscription

from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("name",)}),) + auth_admin.UserAdmin.fieldsets
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]

class DoctorAdmin(admin.ModelAdmin):
    list_display = ('user', 'age', 'address', 'qualification', 'last_updated_date', 'last_updated_by')

class InstructorAdmin(admin.ModelAdmin):
    list_display = ('user', 'age', 'address', 'qualification', 'last_updated_date', 'last_updated_by')

admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Instructor, InstructorAdmin)
admin.site.register(Feedback)
@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('user', 'plan','price', 'start_date', 'end_date', 'status')