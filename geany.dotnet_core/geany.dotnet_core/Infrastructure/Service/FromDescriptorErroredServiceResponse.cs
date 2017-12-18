using Microsoft.AspNetCore.Mvc.Abstractions;

namespace geany.dotnet_core.Infrastructure.Service
{
    public class FromDescriptorErroredServiceResponse : ServiceResponse
    {
        
        public FromDescriptorErroredServiceResponse(ActionDescriptor actionDescriptor)
        {
            this.Status = $"[{actionDescriptor.DisplayName}]";
        }
    }
}
