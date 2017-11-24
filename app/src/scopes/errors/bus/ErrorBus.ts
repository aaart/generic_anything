export default interface ErrorBus {
    publish(message: string): void;
}