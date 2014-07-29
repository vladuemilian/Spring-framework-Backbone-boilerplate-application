package market.models.services;

public interface IQueryHandler<TQuery, TResult> {

	TResult handle(TQuery query);
}
