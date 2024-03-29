using Domain;
using FluentValidation;

namespace Application.Activities
{
    public class ActivityValidator : AbstractValidator<Activity>
    {
        public ActivityValidator()
        {
            RuleFor(X => X.Title).NotEmpty();
            RuleFor(X => X.Description).NotEmpty();
            RuleFor(X => X.Date).NotEmpty();
            RuleFor(X => X.Catagory).NotEmpty();
            RuleFor(X => X.City).NotEmpty();
            RuleFor(X => X.Venue).NotEmpty();
        }
    }
}