package market.models.services.cqs;

public interface IQueryHandler<TQuery, TResult> {

	TResult handle(TQuery query);
}
