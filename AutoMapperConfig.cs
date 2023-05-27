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
            CreateMap<City, CityDto>();             
            CreateMap<Doctor, DoctorDto>();             
            CreateMap<Polyclinic, PolyclinicDto>();             
            CreateMap<Specialization, SpecializationDto>();             
        }
    }
}
