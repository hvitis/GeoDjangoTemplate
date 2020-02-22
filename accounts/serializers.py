from rest_framework import serializers
from .models import UserProfile, Location , SocialMedia, ProfileImage

class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialMedia
        fields=['websiteUrl', 'facebookUrl', 'twitterUrl', 'telegramUrl', 'linkedinUrl', 'youtubeUrl']
class LocationSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields=['latitude', 'longitude', 'coordinates']

class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImage
        fields = "__all__"

class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['nickname', 'firstName', 'lastName', 'description','phone_number', 'owns_printer']


class UserProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    location=LocationSerialiazer()
    socialMedia=SocialMediaSerializer()
    profileImage=ProfileImageSerializer()
    class Meta:
        model=UserProfile
        # TODO: On List serializer show location, make PUT serializer for updating user without location
        fields=['user', 'nickname', 'firstName', 'lastName', 'description', 'owns_printer', 'location', 'socialMedia', 'profileImage']
