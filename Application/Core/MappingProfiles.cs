using System.Globalization;
using Application.Activities;
using Application.Comments;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            string currentUsername = null;
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
                .ForMember(b => b.HostUsername, o => o.MapFrom(s => s.Attendees.FirstOrDefault(x => x.IsHost)!.AppUser.UserName));
            CreateMap<ActivityAttendee, AttendeeDto>()
                .ForMember(b => b.DisplayName, o => o.MapFrom(s => s.AppUser))
                .ForMember(b => b.Username, o => o.MapFrom(s => s.AppUser.UserName))
                .ForMember(b => b.Bio, o => o.MapFrom(s => s.AppUser.Bio))
                .ForMember(d => d.Image, 
                    o => o.MapFrom(s => s.AppUser.Photos.FirstOrDefault(x => x.IsMain)!.Url))
                .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.AppUser.Followers.Count))
                .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.AppUser.Followings.Count))
                .ForMember(d => d.Following, 
                    o => o.MapFrom(s => s.AppUser.Followers.Any(x => x.Observer.UserName == currentUsername)));
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url))
                .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.Followers.Count))
                .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.Followings.Count))
                .ForMember(d => d.Following, o => o.MapFrom(s => s.Followers.Any(x => x.Observer.UserName == currentUsername)));
            CreateMap<Comment, CommentDto>()
                .ForMember(b => b.DisplayName, o => o.MapFrom(s => s.Author.DisplayName))
                .ForMember(b => b.Username, o => o.MapFrom(s => s.Author.UserName))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Author.Photos.FirstOrDefault(x => x.IsMain)!.Url));
            CreateMap<ActivityAttendee, Profiles.UserActivityDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.ActivityId))
                .ForMember(d => d.Date, o => o.MapFrom(s => s.Activity.Date))
                .ForMember(d => d.Title, o => o.MapFrom(s => s.Activity.Title))
                .ForMember(d => d.Catagory, o => o.MapFrom(s => s.Activity.Catagory))
                .ForMember(d => d.HostUsername, o => o.MapFrom(s => 
                    s.Activity.Attendees.FirstOrDefault(x => x.IsHost).AppUser.UserName));
        }
    }
}