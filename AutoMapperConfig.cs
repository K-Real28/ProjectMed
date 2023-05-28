using AutoMapper;
using ProjectMed.Dto.Cities;
using ProjectMed.Dto.Doctors;
using ProjectMed.Dto.Polyclinics;
using ProjectMed.Dto.Specializations;
using ProjectMed.Models;

namespace ProjectMed
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<City, CityDto>().ReverseMap();             
            CreateMap<Doctor, DoctorDto>().ReverseMap();
            CreateMap<Polyclinic, PolyclinicDto>().ReverseMap();
            CreateMap<Specialization, SpecializationDto>().ReverseMap();
        }
    }
}
