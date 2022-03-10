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
                .ForMember(b => b.HostUsername, o => o.MapFrom(s => s.Attendees
                    .FirstOrDefault(x => x.IsHost).AppUser.UserName));
            CreateMap<ActivityAttendee, Profiles.Profile>()
                .ForMember(b => b.DisplayName, o => o.MapFrom(s => s.AppUser))
                .ForMember(b => b.Username, o => o.MapFrom(s => s.AppUser.UserName))
                .ForMember(b => b.Bio, o => o.MapFrom(s => s.AppUser.Bio));
        }
    }
}