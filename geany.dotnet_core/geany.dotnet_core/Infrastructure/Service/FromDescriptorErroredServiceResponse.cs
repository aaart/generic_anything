using Microsoft.AspNetCore.Mvc.Controllers;

namespace geany.dotnet_core.Infrastructure.Service
{
    public class FromDescriptorErroredServiceResponse : ServiceResponse
    {
        
        public FromDescriptorErroredServiceResponse(ControllerActionDescriptor actionDescriptor)
        {
            this.Status = $"[{actionDescriptor.ActionName}]";
        }
    }
}
