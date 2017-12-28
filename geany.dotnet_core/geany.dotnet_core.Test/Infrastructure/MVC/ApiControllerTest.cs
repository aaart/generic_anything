using FluentAssertions;
using geany.dotnet_core.Infrastructure.MVC;
using geany.dotnet_core.Infrastructure.Service;
using geany.dotnet_core.Infrastructure.Service.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using Xunit;

namespace geany.dotnet_core.Test.Infrastructure.MVC
{
    public class ApiControllerTest
    {
        [Fact]
        public void should_set_exception_handled_when_context_contains_exception()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Exception = new Exception();
            
            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.ExceptionHandled.Should().BeTrue();
        }

        [Fact]
        public void should_has_ErroredServiceResponse_result_when_context_contains_exception()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Exception = new Exception();

            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.Result.As<JsonResult>().Value.Should().BeOfType<FromDescriptorErroredServiceResponse>(); ;
        }

        [Fact]
        public void should_contain_action_name_as_error_code_when_context_contains_exception()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Exception = new Exception();
            actionExecutedContext.ActionDescriptor = new ControllerActionDescriptor { ActionName = "TestingAction" };
            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.Result.As<JsonResult>().Value.As<FromDescriptorErroredServiceResponse>().Status.Should().Be("[TestingAction]");
        }

        [Fact]
        public void should_throw_exception_when_action_descriptor_is_not_ControllerActionDescriptor()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.ActionDescriptor = new PageActionDescriptor();
            new Action(() => controller.OnActionExecuted(actionExecutedContext)).ShouldThrow<ArgumentException>();
        }

        [Fact]
        public void should_return_non_generic_service_response_when_empty_result_is_returned()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Result = new EmptyResult();
            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.Result.Should().BeOfType<ObjectResult>().And.Subject.As<ObjectResult>().Value.Should().BeOfType<ServiceResponse>();
        }

        [Fact]
        public void should_return_generic_service_response_when_object_result_is_returned()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Result = new ObjectResult(new object());
            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.Result.Should().BeOfType<ObjectResult>().And.Subject.As<ObjectResult>().Value.Should().BeOfType<ServiceResponse<object>>();
        }
    }
}
