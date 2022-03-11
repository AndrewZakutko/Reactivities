using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
                .ForMember(b => b.HostUsername, o => o.MapFrom(s => s.Attendees.FirstOrDefault(x => x.IsHost)!.AppUser.UserName));
            CreateMap<ActivityAttendee, AttendeeDto>()
                .ForMember(b => b.DisplayName, o => o.MapFrom(s => s.AppUser))
                .ForMember(b => b.Username, o => o.MapFrom(s => s.AppUser.UserName))
                .ForMember(b => b.Bio, o => o.MapFrom(s => s.AppUser.Bio))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.AppUser.Photos.FirstOrDefault(x => x.IsMain)!.Url));
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url));
        }
    }
}