using Microsoft.AspNetCore.Mvc;
using geany.dotnet_core.Infrastructure.Service.Generic;
using geany.dotnet_core.Scopes.CityList.Dto;

namespace geany.dotnet_core.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CityListController : Controller
    {
        public ServiceResponse<City[]> Cities() => new ServiceResponse<City[]> { Data = new [] { new City { Name = "Lablyn" }, new City { Name = "Dablyn" } } };
    }
}